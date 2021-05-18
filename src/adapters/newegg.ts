import { Adapter } from "./adapter";
import { CheerioAPI } from "cheerio";

export class NewEgg extends Adapter {
  get displayName() {
    return "NewEgg";
  }

  public parseResult($: CheerioAPI) {
    return $(".product-inventory strong").first().text().trim();
  }

  public validateResult(result: string) {
    return !result.startsWith("OUT OF STOCK");
  }
}
