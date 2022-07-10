Function.prototype.myApply = function (ctx, rest) {
  if (!ctx) {
    ctx = typeof window !== 'undefined' ? window : global;
  }
  let result;
  ctx.fn = this;
  if (rest === null || rest === undefined) {
    result = ctx.fn(rest);
  } else if (typeof rest === 'object') {
    result = ctx.fn(...rest);
  }
  delete rest;
  return result;
};

console.log(Math.max.myApply(null, [1,2,3,4,5]));