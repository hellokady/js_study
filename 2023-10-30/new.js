function _new(constructor, ...args) {
  let result = {};
  // Object.setPrototypeOf(result, constructor.prototype);
  result.__proto__ = constructor.prototype;
  const ctx = constructor.apply(result, args);
  return ctx instanceof Object ? ctx : result;
}

function Example(name) {
  this.name = name;
  console.log(this instanceof Example, this);
}

const example = _new(Example, 'hhh');
