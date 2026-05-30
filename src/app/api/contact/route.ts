import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend client safely
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, website } = body;

    // 1. Honeypot check
    // The field 'website' is a hidden field intended to trap bots.
    // If it is populated, we pretend it succeeded (200 OK) to prevent further submission
    // and preserve daily email allocations.
    if (website && website.trim() !== '') {
      console.warn('[Security] Honeypot field filled. Bot submission detected. Aborting mail send.');
      return NextResponse.json(
        { success: true, message: 'Message sent successfully (intercepted)' },
        { status: 200 }
      );
    }

    // 2. Validate input fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // 3. Send email using Resend
    if (!resend) {
      console.warn('[Development] RESEND_API_KEY is not defined. Logging form content instead:');
      console.log('--- Mock Mail ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log('----------------');
      
      // Delay slightly to simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json({
        success: true,
        message: 'Message mock-sent successfully in development mode.',
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Beacon Site <contact@beacon.me>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'delivered@resend.dev',
      subject: `New beacon.me Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('[API Contact Error]', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
