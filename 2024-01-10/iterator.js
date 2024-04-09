const obj = {
  name: 'kady',
  age: 18
};

Object.prototype[Symbol.iterator] = function () {
  return Array.prototype[Symbol.iterator].call(Object.entries(this))
}

Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  value: function () {
    const o = this;
    let index = 0;
    const keys = Object.keys(o);

    return {
      next() {
        return {
          value: o[keys[index++]],
          done: index > keys.length
        };
      }
    };
  }
});

// const it = obj[Symbol.iterator]()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (const item of obj) {
  console.log(item);
}
