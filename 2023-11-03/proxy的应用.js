/**
 * 实现一个方法，效果如下
 * add[1][2] + 100 => 103
 * add[1][2][3] + 1 => 7
 * add[1][2][3][4] - 2 => 8
 */
const store = {
  sum: 0,
};
const add = new Proxy(store, {
  get(target, p, receiver) {
    if (p === Symbol.toPrimitive) {
      const result = target.sum;
      target.sum = 0;
      return () => result;
    }
    target.sum += +p;
    return receiver;
  },
});

console.log(add[1][2] + 100);
console.log(add[2][2] - 1);
console.log(add[2][3] + 2);
