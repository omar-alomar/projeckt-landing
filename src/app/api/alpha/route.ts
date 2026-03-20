import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, size } = await request.json();

    // Send notification to you
    await resend.emails.send({
      from: process.env.RESEND_FROM || 'Projeckt <hello@projeckt.app>',
      to: process.env.NOTIFY_EMAIL || 'omaro2000@gmail.com',
      subject: `Alpha signup: ${company}`,
      html: `
        <h2>New Alpha Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Team size:</strong> ${size}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    });

    // Send confirmation to the user
    await resend.emails.send({
      from: process.env.RESEND_FROM || 'Projeckt <hello@projeckt.app>',
      to: email,
      subject: "You're on the Projeckt alpha list",
      html: `
        <h2>Welcome to the Projeckt alpha, ${name}.</h2>
        <p>We'll reach out within 24 hours to get ${company} set up.</p>
        <p>As a founding member, you'll lock in your pricing when we launch — and have a direct line to shape the product.</p>
        <p>— The Projeckt team</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Alpha signup error:', error);
    return NextResponse.json({ error: 'Failed to process signup' }, { status: 500 });
  }
}
