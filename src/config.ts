export const config = require("../config.json");
export const products = config["products"]; // PS5 Disc version really... but maybe we can extend in the future
export const smtpSettings = {
  email: process.env.SMTP_EMAIL,
  password: process.env.SMTP_PASSWORD,
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "") || 465,
  recipients: process.env.EMAIL_RECIPIENTS || process.env.SMTP_EMAIL
};
export default config;
