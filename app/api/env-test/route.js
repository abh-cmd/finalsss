import { NextResponse } from 'next/server';

export async function GET() {
    // Log all environment variables
    console.log('Environment Variables Check:');
    console.log('SENDGRID_API_KEY exists:', !!process.env.SENDGRID_API_KEY);
    console.log('EMAIL_FROM exists:', !!process.env.EMAIL_FROM);
    console.log('EMAIL_TO exists:', !!process.env.EMAIL_TO);
    console.log('NEXT_PUBLIC_SITE_URL exists:', !!process.env.NEXT_PUBLIC_SITE_URL);

    // Return detailed response
    return NextResponse.json({
        environment: process.env.NODE_ENV,
        variables: {
            hasApiKey: !!process.env.SENDGRID_API_KEY,
            hasFromEmail: !!process.env.EMAIL_FROM,
            hasToEmail: !!process.env.EMAIL_TO,
            hasSiteUrl: !!process.env.NEXT_PUBLIC_SITE_URL,
            apiKeyLength: process.env.SENDGRID_API_KEY?.length,
            fromEmail: process.env.EMAIL_FROM,
            toEmail: process.env.EMAIL_TO,
            siteUrl: process.env.NEXT_PUBLIC_SITE_URL
        }
    });
} 