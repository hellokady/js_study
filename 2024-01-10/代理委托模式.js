const Task = {
  name: null,
  init(name) {
    this.name = name;
  }
};

const check = Object.create(Task);

check.setup = function (name) {
  this.init(name);
};

check.getName = function () {
  return this.name;
};

check.setName = function (newName) {
  this.name = newName;
};

const c1 = Object.create(check)

c1.setup('ok')
console.log(c1.getName());
c1.setName('job')
console.log(c1.getName());
console.log(Task);