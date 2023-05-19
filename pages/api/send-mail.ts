// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");



type MailRes = {
  message: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<MailRes> ) {

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: process.env.OUTLOOK_EMAIL,
      pass: process.env.OUTLOOK_PASSWORD
    }
  });

  const options = {
    from: process.env.OUTLOOK_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: req.body.subject,
    text: req.body.message,
    html: `<h4>${req.body.name} says:</h4>
          <p>${req.body.message}</p>
          <p>If you wish to reply, please reply to ${req.body.email}</p>`
  }

  if(req.method === "POST") {
    try {
      await transporter.sendMail(options);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end("Message sent successfully!");
    } catch (err) {
      console.log(err);
      res.status(500).end()
    }
  }
  
  res.status(405).end()
  // if(req.method === "POST") {
  //   transporter.sendMail(options, (err: any, info: any) => {
  //     console.log("err: " + err);
  //     console.log(info);

  //     return new Promise((resolve, reject) => {

  //     })
  //   })
  // }
  
}

