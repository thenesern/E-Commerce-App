/* import nodemailer from "nodemailer";
import pug from "pug";
import { htmlToText } from "html-to-text";

export class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.firstName;
    this.url = url;
    this.from = `Enes Eren <${process.env.EMAIL_FROM}>`;
  }
  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  async send(template, subject) {
    const html = html.renderFile("../views/email/welcome.html", {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };
    await transporter.sendMail(mailOptions);
  }
  async sendWelcome() {
    await this.send("welcome", "welcome");
  }
}
 */
