import { config } from "../config";
import { get } from "../api";
import cheerio, { CheerioAPI } from "cheerio";
import logger from "../logger";

export abstract class Adapter {
  productName: string;

  public constructor(product: string) {
    this.productName = product || "PS5 Disc Edition";
  }

  async check(): Promise<boolean> {
    let result: string | undefined;

    try {
      const response = await get(this.url());
      const $ = cheerio.load(response.data)
      result = this.parseResult($);
      logger.info(`${this.displayName} ${this.productName} result: ${result}`)
    } catch (error) {
      logger.error(error.message);
    };
    return result ? this.validateResult(result) : this.handleNoResults()
  }

  get displayName(): string {
    return this.constructor.name;
  }

  handleNoResults(): false {
    logger.error(`
      Check your ${this.displayName} adapter - it did not find a result for
      the scraping query, which means the DOM of the resulting page changed
      or the logic for the scrape is incorrect somehow.
    `)
    return false;
  }

  url(): string {
    return config["products"][this.productName][this.displayName];
  }

  // Implement the following in each adapter

  abstract parseResult($: CheerioAPI): string; // After page is fetched, pull the 'result text' out of wherever it resides
  abstract validateResult(result: string): boolean; // After result is parsed, return true for in stock, or false for unavailable
}
