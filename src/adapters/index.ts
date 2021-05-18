import { memoize } from "../util/memoize";
import { Adapter } from "./adapter";
import { Amazon } from "./amazon";
import { BestBuy } from "./bestbuy";
import { NewEgg } from "./newegg";
// import { Walmart } from "./walmart";

export const AllAdapters = [
  Amazon,
  NewEgg,
  BestBuy
  // Walmart  --- Server Side Rendering insufficient, doesn't work ATM
]

export const findAdapter = memoize(
  (product: string, name: string): Adapter | undefined => {
    const adapter = AllAdapters.find((adapter) => adapter.name === name)
    return adapter ? new adapter(product) : undefined;
  }
)


export default AllAdapters;
