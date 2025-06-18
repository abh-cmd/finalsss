import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/email';

export async function POST(request) {
  try {
    // Log the full request details
    console.log('Request headers:', Object.fromEntries(request.headers));
    
    // Validate environment variables
    if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM) {
      console.error('Missing required environment variables:', {
        hasApiKey: !!process.env.SENDGRID_API_KEY,
        hasFromEmail: !!process.env.EMAIL_FROM,
        apiKeyLength: process.env.SENDGRID_API_KEY?.length,
        fromEmail: process.env.EMAIL_FROM
      });
      return NextResponse.json(
        { error: 'Email service is not properly configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    console.log('Received request body:', body);
    
    const { name, mobile, email, homeType, location } = body;

    // Validate required fields
    if (!name || !mobile || !email || !homeType || !location) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailResponse = await sendEmail({
      subject: `New Consultation Request from ${name}`,
      text: `
        New Consultation Request Details:
        
        Name: ${name}
        Mobile: ${mobile}
        Email: ${email}
        Home Type: ${homeType}
        Location: ${location}
        
        Time submitted: ${new Date().toLocaleString()}
      `,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Home Type:</strong> ${homeType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Time submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    if (!emailResponse.success) {
      console.error('Email sending failed:', emailResponse.error);
      return NextResponse.json(
        { error: `Failed to send email: ${emailResponse.error}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', emailResponse.response);
    return NextResponse.json(
      { message: 'Consultation request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: `Failed to process request: ${error.message}` },
      { status: 500 }
    );
  }
} 