// 迭代器
Object.prototype[Symbol.iterator] = function () {
  const keys = Object.values(this);
  const iter = keys[Symbol.iterator]();
  return iter;
};

const obj = {
  a: 1,
  b: 2,
};


for (const item of obj) {
  console.log(item);
}


// 生成器
Object.prototype[Symbol.iterator] = function* () {
  return yield* Object.values(this);
};

let [a, b] = {
  a: 3,
  b: 2,
};

console.log(a, b);
