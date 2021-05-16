export const memoize = (func: Function, depsFunc?: (args: any[]) => string) => {
  const cache: { [key: string]: any } = {};
  return (...args: any) => {
    const key = depsFunc ? depsFunc(args) : JSON.stringify(args);

    if (!cache[key]) {
      cache[key] = func.apply(this, args);
    }

    return cache[key];
  }
}
