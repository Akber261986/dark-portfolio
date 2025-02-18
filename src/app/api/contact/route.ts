import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import isOnline from 'is-online';  

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  // Check internet connectivity
  const online = await isOnline();
  
  if (!online) {
    return NextResponse.json({
      success: false,
      message: "Failed to send message try again later."
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: `New contact form submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n(${subject})\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message' });
  }

}