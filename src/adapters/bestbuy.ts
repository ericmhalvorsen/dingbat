import { Adapter } from "./adapter";
import { CheerioAPI } from "cheerio";

export class BestBuy extends Adapter {
  get displayName() {
    return "BestBuy";
  }

  public parseResult($: CheerioAPI) {
    return $(".add-to-cart-button").text().trim();
  }

  public validateResult(result: string) {
    return !result.startsWith("Sold Out");
  }
}
