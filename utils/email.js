import sgMail from '@sendgrid/mail';

export async function sendEmail({ subject, text, html }) {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not defined');
      throw new Error('SENDGRID_API_KEY is required');
    }
    if (!process.env.EMAIL_FROM) {
      console.error('EMAIL_FROM is not defined');
      throw new Error('EMAIL_FROM is required');
    }
    if (!process.env.EMAIL_TO) {
      console.error('EMAIL_TO is not defined');
      throw new Error('EMAIL_TO is required');
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject,
      text,
      html,
    };

    const response = await sgMail.send(msg);
    return {
      success: true,
      response
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
} 