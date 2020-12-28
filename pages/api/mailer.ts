import nodemailer from 'nodemailer';
// require('dotenv').config();

export default function handler(req, res) {
  const output = `
    <h2>Contact Details</h2>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h2>Message</h2>
    <p>${req.body.message}</p>
  `;

  console.log('process.env is ', process.env);

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
      res.status = 400;
      res.end();
    }
    console.log('Message sent: %s', info.messageId);

    res.render('contact', { msg: 'Email has been sent' });
  });
  res.status = 200;
  res.end();
}
