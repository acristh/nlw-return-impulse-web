import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'André Araujo <andre.cristiano1975@gmail.com>',
      subject: subject,
      html: body,
    });
  }

}

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "70c33b327f3eb2",
    pass: "b65a615005a1e5"
  }
});
