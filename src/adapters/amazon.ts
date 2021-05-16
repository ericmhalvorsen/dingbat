import { Adapter } from "./adapter";
import { CheerioAPI } from "cheerio";

export class Amazon extends Adapter {
  get displayName() {
    return "Amazon";
  }

  public parseResult($: CheerioAPI) {
    return $("#availability span").first().text().trim();
  }

  public validateResult(result: string) {
    return !result.startsWith("Currently unavailable");
  }
}
