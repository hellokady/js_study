Function.prototype.myCall = function (ctx, ...args) {
  // preCheck：判断传入的ctx，为null|undefined时
  // 1、将this设为对象的属性，属性值需要唯一性
  // 2、执行属性方法
  // 3、返回结果
  ctx = ctx === undefined || ctx === null ? globalThis : Object(ctx);
  const key = Symbol("temp");
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: this,
  });
  const result = ctx[key](...args);
  return result;
};

// test
var foo = {
  name: "foo",
};
var name = "bar";
function bar(sex, age) {
  console.log(sex);
  console.log(age);
  console.log(this);
}

bar.myCall(foo, "男", 23);
console.log("==============");
bar.myCall(null, "女", 13);
console.log("==============");
bar.myCall(1, "女", 13);
