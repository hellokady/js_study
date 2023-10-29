class Example {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

// 注意事项：
// 1、类只能被new实例化；判断如果this没有指向类的实例，报错
// 2、函数实现class效果需要在严格模式下
// 3、原型对象的属性不可被迭代
// 4、实例方法不可以被new实例化；仍然判断this指向问题

("use strict");

function ExampleFun(name) {
  if (!(this instanceof ExampleFun)) {
    throw new TypeError(
      "Class constructor Example cannot be invoked without 'new'"
    );
  }
  this.name = name;
}

Object.defineProperty(ExampleFun.prototype, "getName", {
  value: function () {
    if (!(this instanceof ExampleFun)) {
      throw new TypeError("getName is not a constructor");
    }
    return this.name;
  },
  enumerable: false,
});

const efn = new ExampleFun("hhh");

console.log(efn.getName());
