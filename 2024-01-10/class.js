// 探索原型继承

function Foo(name) {
  this.name = name;
}

Foo.prototype.getName = function () {
  console.log(this.name);
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

// Bar.prototype = Foo.prototype; // 这样会污染Foo的原型对象
// Bar.prototype = Object.create(Foo.prototype); // 此时constrcutor已经丢失，不再指向Bar
Object.setPrototypeOf(Bar.prototype, Foo.prototype); // 此时constrcutor已经丢失，不再指向Bar
Bar.prototype.constrcutor = Bar
console.log(Bar.prototype.constrcutor === Bar);

Bar.prototype.getLabel = function () {
  console.log(this.label);
};

const bar = new Bar('ok', '这是bar的label');
const foo = new Foo('en');

bar.getLabel();
