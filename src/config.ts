export const config: { products: { [key: string]: { [key: string]: string } } } = {
  products: {
    "PS5 Disc Edition": {
      "Amazon": "https://www.amazon.com/dp/B08FC5L3RG",
      "NewEgg": "https://www.newegg.com/p/N82E16868110291",
      "BestBuy": "https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p"
      // "Walmart": "https: //www.walmart.com/ip/Sony-PlayStation-5-Video-Game-Console/363472942"
    }
  }
}

export const products = config.products; // PS5 Disc version really... but maybe we can extend in the future
export const smtpSettings = {
  email: process.env.SMTP_EMAIL,
  password: process.env.SMTP_PASSWORD,
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "") || 465,
  recipients: process.env.EMAIL_RECIPIENTS || process.env.SMTP_EMAIL
};
export default config;
