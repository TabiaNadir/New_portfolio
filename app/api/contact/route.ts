// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || '',
      to: process.env.EMAIL_TO || '',
      subject: 'New Contact Message',
      replyTo: email,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    })
  } catch (error) {
    console.error('Resend Error:', error)
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    })
  }
}
