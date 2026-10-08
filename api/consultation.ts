import type { IncomingMessage, ServerResponse } from 'node:http';
import crypto from 'node:crypto';

// In-memory rate limiting and idempotency cache for warm serverless instances
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const duplicateSubmissions = new Map<string, number>();

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

const GOOGLE_SHEETS_WEB_APP_URL =
  process.env.GOOGLE_SHEETS_WEB_APP_URL ||
  process.env.VITE_GOOGLE_SHEETS_WEB_APP_URL ||
  'https://script.google.com/macros/s/AKfycbyQHiyXcydcz7ADhMumrmWxyhc1U7kjGZ4ZldoAAMJCo7D0m9hmI4OIgB2xdkUgne46/exec';

function sanitize(str: string): string {
  return str.replace(/<[^>]*>?/gm, '').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
}

function sendJson(res: ServerResponse, statusCode: number, data: unknown) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

// Helper to extract JSON body from Vercel parsed request or Node stream
async function parseBody(req: IncomingMessage & { body?: any }): Promise<any> {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 50000) {
        req.destroy();
        resolve({});
      }
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

export default async function handler(
  req: IncomingMessage & { body?: any },
  res: ServerResponse
) {
  // CORS & Security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { success: false, error: 'Method not allowed. Use POST.' });
  }

  try {
    const rawIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
    const now = Date.now();

    // 1. Ephemeral rate limiting (max 5 requests / 15 minutes per IP on warm instances)
    const clientRate = rateLimitMap.get(rawIp);
    if (clientRate) {
      if (now > clientRate.resetAt) {
        rateLimitMap.set(rawIp, { count: 1, resetAt: now + 15 * 60 * 1000 });
      } else if (clientRate.count >= 5) {
        return sendJson(res, 429, {
          success: false,
          error: 'Too many requests. Please wait a few minutes before trying again or reach out directly by phone.',
        });
      } else {
        clientRate.count += 1;
      }
    } else {
      rateLimitMap.set(rawIp, { count: 1, resetAt: now + 15 * 60 * 1000 });
    }

    const body = await parseBody(req);
    const { fullName, phone, email, legalMatter, briefDescription } = body || {};

    // 2. Field validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2 || fullName.trim().length > 100) {
      return sendJson(res, 400, {
        success: false,
        error: 'Please provide a valid full name (2–100 characters).',
      });
    }

    const cleanPhone = typeof phone === 'string' ? phone.trim().replace(/[\s\-\(\)]/g, '') : '';
    if (!cleanPhone || cleanPhone.length < 8 || cleanPhone.length > 16 || !/^\+?[0-9]{8,15}$/.test(cleanPhone)) {
      return sendJson(res, 400, {
        success: false,
        error: 'Please enter a valid phone number with area or country code.',
      });
    }

    const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 120) {
      return sendJson(res, 400, {
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const cleanMatter = typeof legalMatter === 'string' ? legalMatter.trim() : '';
    if (!ALLOWED_LEGAL_MATTERS.includes(cleanMatter)) {
      return sendJson(res, 400, {
        success: false,
        error: 'Please select a valid legal matter category from the list.',
      });
    }

    if (!briefDescription || typeof briefDescription !== 'string' || briefDescription.trim().length < 5 || briefDescription.trim().length > 1000) {
      return sendJson(res, 400, {
        success: false,
        error: 'Please provide a brief description of the legal matter (5–1,000 characters).',
      });
    }

    // 3. Duplicate check within warm instance
    const cleanDesc = sanitize(briefDescription);
    const duplicateKey = crypto
      .createHash('sha256')
      .update(`${cleanEmail}:${cleanPhone}:${cleanMatter}:${cleanDesc}`)
      .digest('hex');

    const prevSubmissionTime = duplicateSubmissions.get(duplicateKey);
    if (prevSubmissionTime && now - prevSubmissionTime < 10 * 60 * 1000) {
      return sendJson(res, 200, {
        success: true,
        message: 'Your consultation inquiry has already been received. Advocate Anish will contact you shortly.',
      });
    }
    duplicateSubmissions.set(duplicateKey, now);

    // 4. Forward to Google Apps Script Web App
    if (GOOGLE_SHEETS_WEB_APP_URL && GOOGLE_SHEETS_WEB_APP_URL.startsWith('http')) {
      const nowObj = new Date();
      try {
        await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: sanitize(fullName),
            email: cleanEmail,
            phone: cleanPhone,
            service: cleanMatter,
            message: cleanDesc,
            pageUrl: (req.headers.referer || req.headers.origin || '').toString(),
            formName: 'Consultation Enquiry',
            submissionDate: nowObj.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }),
            submissionTime: nowObj.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }),
            submittedAt: nowObj.toISOString(),
          }),
        });
      } catch (forwardErr) {
        console.warn('[VERCEL_SHEETS_FORWARD_WARN]', forwardErr);
      }
    }

    return sendJson(res, 200, {
      success: true,
      message: 'Your consultation request has been received. Advocate Anish will review the details and get in touch with you shortly.',
    });
  } catch {
    return sendJson(res, 500, {
      success: false,
      error: 'Unable to process your request at this time. Please try again or reach out directly by phone.',
    });
  }
}
