import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Advocate Anish Practice Consultation Service (Next.js)',
    timestamp: new Date().toISOString(),
  });
}
