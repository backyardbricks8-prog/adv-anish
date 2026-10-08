import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

// In-memory rate limiting and duplicate cache for warm serverless instances
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
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL ||
  process.env.VITE_GOOGLE_SHEETS_WEB_APP_URL ||
  'https://script.google.com/macros/s/AKfycbyQHiyXcydcz7ADhMumrmWxyhc1U7kjGZ4ZldoAAMJCo7D0m9hmI4OIgB2xdkUgne46/exec';

function sanitize(str: string): string {
  return str.replace(/<[^>]*>?/gm, '').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request: Request) {
  try {
    const rawIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();

    // 1. Rate limiting (max 5 requests / 15 minutes per IP on warm instances)
    const clientRate = rateLimitMap.get(rawIp);
    if (clientRate) {
      if (now > clientRate.resetAt) {
        rateLimitMap.set(rawIp, { count: 1, resetAt: now + 15 * 60 * 1000 });
      } else if (clientRate.count >= 5) {
        return NextResponse.json(
          {
            success: false,
            error: 'Too many requests. Please wait a few minutes before trying again or reach out directly by phone.',
          },
          { status: 429 }
        );
      } else {
        clientRate.count += 1;
      }
    } else {
      rateLimitMap.set(rawIp, { count: 1, resetAt: now + 15 * 60 * 1000 });
    }

    const body = await request.json().catch(() => ({}));

    // 2. Honeypot check
    if (body.website_url || body.honeypot) {
      return NextResponse.json({ success: true, message: 'Enquiry received.' });
    }

    const fullName = sanitize(body.fullName || body.name || '');
    const phone = sanitize(body.phone || '');
    const email = sanitize(body.email || '');
    const legalMatter = sanitize(body.legalMatter || body.service || 'Bail Matters');
    const briefDescription = sanitize(body.briefDescription || body.message || '');

    // 3. Validation
    if (!fullName || fullName.length < 2 || fullName.length > 100) {
      return NextResponse.json({ success: false, error: 'Please enter your full name.' }, { status: 400 });
    }

    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 8 || cleanPhone.length > 15 || !/^\+?[0-9]{8,15}$/.test(cleanPhone)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid phone number.' }, { status: 400 });
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!email || !emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ success: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!ALLOWED_LEGAL_MATTERS.includes(legalMatter)) {
      return NextResponse.json({ success: false, error: 'Please select a valid practice area.' }, { status: 400 });
    }

    if (!briefDescription || briefDescription.length < 15 || briefDescription.length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Please provide at least 15 characters describing your matter.' },
        { status: 400 }
      );
    }

    // 4. Idempotency / Duplicate submission guard (prevent repeat clicks within 60s)
    const hash = crypto
      .createHash('sha256')
      .update(`${fullName.toLowerCase()}:${email.toLowerCase()}:${cleanPhone}:${briefDescription.slice(0, 50)}`)
      .digest('hex');

    const previousSubmission = duplicateSubmissions.get(hash);
    if (previousSubmission && now - previousSubmission < 60000) {
      return NextResponse.json({
        success: true,
        message: 'Your enquiry was already received. An advocate will contact you shortly.',
        duplicate: true,
      });
    }
    duplicateSubmissions.set(hash, now);

    // 5. Build standardized Google Sheets payload
    const sheetPayload = {
      name: fullName,
      email: email,
      phone: phone,
      service: legalMatter,
      message: briefDescription,
      pageUrl: request.headers.get('referer') || 'https://advocateanish.com/#consultation',
      formName: 'Consultation Enquiry',
      submittedAt: new Date().toISOString(),
    };

    // 6. Forward to Google Apps Script Web App
    if (GOOGLE_SHEETS_WEB_APP_URL && GOOGLE_SHEETS_WEB_APP_URL.startsWith('http')) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      try {
        const scriptRes = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(sheetPayload),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (scriptRes.ok) {
          return NextResponse.json({
            success: true,
            message: 'Your enquiry has been received and logged to the practice chamber.',
          });
        }
      } catch (err: unknown) {
        clearTimeout(timeoutId);
        console.warn('Google Sheets Web App POST notice (Next.js):', (err as Error)?.message || err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been securely received.',
    });
  } catch (error: unknown) {
    console.error('Next.js consultation API handler error:', error);
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't submit your enquiry right now. Please call or message on WhatsApp directly.",
      },
      { status: 500 }
    );
  }
}
