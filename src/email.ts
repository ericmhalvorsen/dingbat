import nodemailer from "nodemailer";
import { Adapter } from "./adapters/adapter";
import { smtpSettings } from "./config";
import { logger } from "./logger";

const { host, port, email, password, recipients } = smtpSettings;

const mailer = () =>
  nodemailer.createTransport({
    host,
    port,
    secure: port === 465 ? true : false,
    auth: {
      user: email,
      pass: password
    },
  });

export const notify = async (handler: Adapter) => {
  if (!email || !password || !recipients) {
    logger.warn(`
      Product was found!!! But email cannot be sent because email was not configured correctly.
      Make sure to set SMTP_EMAIL, SMTP_PASSWORD, and EMAIL_RECIPIENTS in your .env file.
    `)
  } else {
    const message = mailer().sendMail({
      from: "Dingbat",
      to: recipients,
      subject: `${handler.productName} found at ${handler.displayName}`,
      html: `
        <div style="font-family: Segoe UI">
          <h2>DING!</h2>
          <p style="font-size: 16px">
            I think I may have found a ${handler.productName} at ${handler.displayName}: ${handler.url()}
          </p>
          <p>This Email was autogenerated by Dingbat. Have a nice day.</p>
        </div>
      `
    });

    message.then((result) => logger.info(`Message sent: ${JSON.stringify(result)}`));
  }
}
