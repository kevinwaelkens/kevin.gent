import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const output = `
    <h2>Contact Details</h2>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h2>Message</h2>
    <p>${req.body.message}</p>
  `;

  const { SMTP_SERVICE, SMTP_USER, SMTP_PASS, SMTP_RECEIVER } = process.env;

  const transporter = nodemailer.createTransport({
    service: SMTP_SERVICE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: SMTP_RECEIVER,
    subject: 'Contact request kevin.gent',
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).end();
    }
    console.log('Message sent: %s', info.messageId);
  });

  res.status(200).end();
}
