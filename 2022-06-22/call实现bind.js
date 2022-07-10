Function.prototype.myBind = function(ctx, ...args) {
  return (...newArgs) => this.call(ctx, ...args, ...newArgs);
};

console.log(Math.max.myBind(null, 1,2,3,4,)(5));