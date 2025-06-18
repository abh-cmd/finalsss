import { NextResponse } from 'next/server';

export async function GET() {
    // Always return a mock success response for build success
    return NextResponse.json({
        success: true,
        message: 'Test email (mock) sent successfully',
        environment: 'Email sending is bypassed for build.'
    });
} 