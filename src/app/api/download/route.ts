import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, website } = body;

    // Honeypot
    if (website && website.trim() !== '') {
      return NextResponse.json({ success: true });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    if (!resend) {
      console.log('[Dev] Profile download request:', { name, email });
      await new Promise((r) => setTimeout(r, 600));
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: 'Beacon Site <contact@beacon.me>',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'delivered@resend.dev',
      subject: `Profile Download Request — ${email}`,
      html: `
        <h2>Company Profile Downloaded</h2>
        <p><strong>Email:</strong> ${email}</p>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
