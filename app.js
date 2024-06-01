const nodemailer = require("nodemailer");
require("dotenv").config();

const html = `
<h1>Hello World</h1>
<p>This is me creating an email service</p>
`;

async function main() {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
    port: 465,
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "mirmughal10@gmail.com",
      subject: "Message Sent from mehmood",
      text: "Checking this message again from it",
      html: html,
    });
    console.log("Message Sent: " + info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

main().catch((e) => console.log(e));
