import { Adapter } from "./adapter";
import { CheerioAPI } from "cheerio";

export class Walmart extends Adapter {
  get displayName() {
    return "Walmart";
  }

  public parseResult($: CheerioAPI) {
    return $(".prod-blitz-copy-message").text().trim();
  }

  public validateResult(result: string) {
    return !result.startsWith("This item is out of stock");
  }
}
