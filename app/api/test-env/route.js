import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        hasApiKey: !!process.env.SENDGRID_API_KEY,
        hasFromEmail: !!process.env.EMAIL_FROM,
        hasToEmail: !!process.env.EMAIL_TO,
        apiKeyLength: process.env.SENDGRID_API_KEY?.length,
        fromEmail: process.env.EMAIL_FROM,
        toEmail: process.env.EMAIL_TO
    });
} 