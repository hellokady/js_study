Function.prototype.myApply = function (ctx, rest) {
  ctx = ctx === undefined || ctx === null ? globalThis : Object(ctx);

  let result;
  const key = Symbol("temp");
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: this,
  });
  if (rest === null || rest === undefined) {
    result = ctx[key](rest);
  } else if (typeof rest === "object") {
    result = ctx[key](...rest);
  }
  return result;
};

console.log(Math.max.myApply(null, [1, 2, 3, 4, 5]));
