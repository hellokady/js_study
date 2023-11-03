function add(...args) {
  let fn = function (..._args) {
    return add(...args, ..._args);
  };

  fn.valueOf = function () {
    return args.reduce((a, b) => a + b);
  };

  return fn;
}

console.log(add(1)(2) + 100);
console.log(add(1)(2)(3) - 100);
