let my_symbol = Symbol('hhh');

let obj = {
  [my_symbol]: 123
};

console.log(obj);

obj[my_symbol] = 456;

console.log(obj[my_symbol]);
console.log(obj);
