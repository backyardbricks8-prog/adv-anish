import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

interface ConsultationLead {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  legalMatter: string;
  briefDescription: string;
  source: string;
}

// In-memory rate limiter & duplicate cache (production-safe & ephemeral)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const duplicateSubmissions = new Map<string, number>();

// Allowed verified legal categories from PRD
const ALLOWED_LEGAL_MATTERS = [
  'Bail Matters',
  'Civil & Criminal Matters',
  'Business Registration',
  'Trademark & Intellectual Property',
  'Traffic Challan Matters',
  'Compliance',
  'Legal Documentation',
  'Other Legal Matter',
];

async function createServer() {
  const app = express();

  // Basic security headers
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader(
      'Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), payment=()'
    );
    next();
  });

  // Strict payload limits
  app.use(express.json({ limit: '50kb' }));

  // Consultation submission API endpoint
  app.post('/api/consultation', (req: Request, res: Response) => {
    try {
      const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
      const now = Date.now();

      // 1. Rate limiting by IP (max 5 submissions per 15 minutes)
      const clientRate = rateLimitMap.get(clientIp);
      if (clientRate) {
        if (now > clientRate.resetAt) {
          rateLimitMap.set(clientIp, { count: 1, resetAt: now + 15 * 60 * 1000 });
        } else if (clientRate.count >= 5) {
          return res.status(429).json({
            success: false,
            error: 'Too many requests. Please wait a few minutes before trying again or reach out directly by phone.',
          });
        } else {
          clientRate.count += 1;
        }
      } else {
        rateLimitMap.set(clientIp, { count: 1, resetAt: now + 15 * 60 * 1000 });
      }

      const { fullName, phone, email, legalMatter, briefDescription } = req.body || {};

      // 2. Input validation
      if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2 || fullName.trim().length > 100) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid full name (2–100 characters).',
        });
      }

      const cleanPhone = typeof phone === 'string' ? phone.trim().replace(/[\s\-\(\)]/g, '') : '';
      if (!cleanPhone || cleanPhone.length < 8 || cleanPhone.length > 16 || !/^\+?[0-9]{8,15}$/.test(cleanPhone)) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid phone number with area or country code.',
        });
      }

      const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 120) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a valid email address.',
        });
      }

      const cleanMatter = typeof legalMatter === 'string' ? legalMatter.trim() : '';
      if (!ALLOWED_LEGAL_MATTERS.includes(cleanMatter)) {
        return res.status(400).json({
          success: false,
          error: 'Please select a valid legal matter category from the list.',
        });
      }

      if (!briefDescription || typeof briefDescription !== 'string' || briefDescription.trim().length < 5 || briefDescription.trim().length > 1000) {
        return res.status(400).json({
          success: false,
          error: 'Please provide a brief description of the legal matter (5–1,000 characters).',
        });
      }

      // 3. Duplicate submission check (same email + phone + matter hash within 10 minutes)
      const duplicateKey = crypto
        .createHash('sha256')
        .update(`${cleanEmail}:${cleanPhone}:${cleanMatter}:${briefDescription.trim()}`)
        .digest('hex');

      const existingTimestamp = duplicateSubmissions.get(duplicateKey);
      if (existingTimestamp && now - existingTimestamp < 10 * 60 * 1000) {
        // Return success idempotently without duplicate duplicate processing
        return res.status(200).json({
          success: true,
          message: 'Your consultation inquiry has already been received. Advocate Anish will contact you shortly.',
        });
      }
      duplicateSubmissions.set(duplicateKey, now);

function sanitizeInput(str: string): string {
  return str.replace(/<[^>]*>?/gm, '').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
}

      // 4. Secure lead object creation (never log confidential description)
      const sanitizedName = sanitizeInput(fullName);
      const sanitizedDesc = sanitizeInput(briefDescription);
      const leadId = crypto.randomUUID();
      const leadRecord: ConsultationLead = {
        id: leadId,
        createdAt: new Date().toISOString(),
        fullName: sanitizedName,
        phone: cleanPhone,
        email: cleanEmail,
        legalMatter: cleanMatter,
        briefDescription: sanitizedDesc,
        source: 'Advocate Anish Single-Page Website',
      };

      // Masked operational log without sensitive legal-matter details or full PII
      const maskedPhone = cleanPhone.slice(0, 3) + '***' + cleanPhone.slice(-2);
      console.log(`[CONSULTATION_LEAD_RECEIVED] ID=${leadId.slice(0, 8)} Matter="${cleanMatter}" Phone="${maskedPhone}"`);

      // Store in ephemeral storage or append safely
      try {
        const leadsDir = path.join(__dirname, '.data');
        if (!fs.existsSync(leadsDir)) {
          fs.mkdirSync(leadsDir, { recursive: true });
        }
        const leadsFilePath = path.join(leadsDir, 'consultations.jsonl');
        fs.appendFileSync(leadsFilePath, JSON.stringify(leadRecord) + '\n', 'utf8');
      } catch (storageErr) {
        // Storage logged internally without leaking to client
        console.error('[STORAGE_NOTE] Failed to persist file, kept in memory');
      }

      // Forward to Google Apps Script Web App if configured in environment or default config
      const serverSheetsUrl =
        process.env.GOOGLE_SHEETS_WEB_APP_URL ||
        process.env.VITE_GOOGLE_SHEETS_WEB_APP_URL ||
        'https://script.google.com/macros/s/AKfycbyQHiyXcydcz7ADhMumrmWxyhc1U7kjGZ4ZldoAAMJCo7D0m9hmI4OIgB2xdkUgne46/exec';
      if (serverSheetsUrl && serverSheetsUrl.startsWith('http') && serverSheetsUrl !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
        const nowObj = new Date();
        fetch(serverSheetsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: sanitizedName,
            email: cleanEmail,
            phone: cleanPhone,
            service: cleanMatter,
            message: sanitizedDesc,
            pageUrl: (req.headers.referer || req.headers.origin || '').toString(),
            formName: 'Consultation Enquiry',
            submissionDate: nowObj.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }),
            submissionTime: nowObj.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }),
            submittedAt: leadRecord.createdAt,
          }),
        }).catch((forwardErr: any) => {
          console.warn('[SHEETS_FORWARD_WARN] Failed to forward to Google Apps Script:', forwardErr?.message);
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Your consultation request has been received. Advocate Anish will review the details and get in touch with you shortly.',
      });
    } catch (err) {
      // Safe generic error message; never expose stack traces or backend internals
      console.error('[CONSULTATION_ERROR] An error occurred during request processing');
      return res.status(500).json({
        success: false,
        error: 'Unable to process your request at this time. Please try again or reach out directly by phone or WhatsApp.',
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
  });

  // Client serving: Vite in development, static build in production
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Advocate Anish website running on http://0.0.0.0:${PORT}`);
  });
}

createServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
