import { memoize } from "../util/memoize";
import { Adapter } from "./adapter";
import { Amazon } from "./amazon";

export const AllAdapters = [
  Amazon
]

export const findAdapter = memoize(
  (product: string, name: string): Adapter | undefined => {
    const adapter = AllAdapters.find((adapter) => adapter.name === name)
    return adapter ? new adapter(product) : undefined;
  }
)


export default AllAdapters;
