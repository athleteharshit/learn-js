export function once(fun, context) {
  let ren;
  return function () {
    if (fun) {
      ren = fun.apply(context || this, arguments);
      fun = null;
    }
    return ren;
  };
}

// memoize function
export function memoize(fn, context) {
  const res = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!res[key]) {
      res[key] = fn.call(context || this, ...args);
    }
    return res[key];
  };
}