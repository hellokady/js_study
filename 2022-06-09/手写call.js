Function.prototype.callCustom = function(context) {
  // preCheck：判断传入的this，为null|undefined时需要赋值为window|global
  if (!context) {
    context = typeof window === 'undefined' ? global : window;
  }
  // 1、将函数设为对象的属性
  context.fn = this;
  // 2、获取执行callCustom传递的参数（从第二个参数起-最后一个参数）
  let params = [...arguments].slice(1);
  // 3、执行函数
  let result = context.fn(...params);
  // 4、删除函数
  delete context.fn;
  return result;
}


// test
var foo = {
  name: 'foo'
};
var name = 'bar';
function bar(sex, age) {
  console.log(sex);
  console.log(age);
  console.log(this.name);
}

bar.callCustom(foo, '男', 23);
console.log("==============");
bar.callCustom(null, '女', 13);