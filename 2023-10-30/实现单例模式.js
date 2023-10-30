class Example {
  constructor() {
    console.log("Constructing Example");
  }
}

function singleton(className) {
  let ins;
  // 使用代理后，可以在类的原型对象中添加属性
  return new Proxy(className, {
    construct(target, args) {
      if (!ins) {
        ins = new target(...args);
      }
      return ins;
    },
  });
}

const NewExample = singleton(Example);

NewExample.prototype.getName = function () {
  console.log('getName');
};

const e1 = new NewExample();
const e2 = new NewExample();
e1.getName();
console.log(e1 === e2);
