import {Handler} from '@netlify/functions'
import nodemailer from 'nodemailer'

export const handler: Handler = async (event, context) => {
  try {
    if (!event.body) throw new Error('event.body missing')
    const data = JSON.parse(event.body);
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_GMAIL_USER,
        pass: process.env.SMTP_GMAIL_PASS
      }
    });
    const mailOptions = {
      from: `"${data.from_name}" <${data.from_email}>`,
      to: 'bitcoin-studio@protonmail.com',
      subject: 'Bitcoin Studio Website Form',
      text: data.message
    }
    const messageInfo = await transporter.sendMail(mailOptions);
    console.log('messageInfo', messageInfo);
    return {
      statusCode: 200,
      body: JSON.stringify({message: "Mail sent successfully"}),
      headers: {'Content-Type': 'application/json'}
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({error: (error as any).message}),
      headers: {'Content-Type': 'application/json'}
    };
  }
}
