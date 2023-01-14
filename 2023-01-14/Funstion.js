var greeting = 'My name is ${name}, age ${age}, I am a ${job.jobName}';
var employee = {
  name: 'XiaoMing',
  age: 11,
  job: {
    jobName: 'designer',
    jobLevel: 'senior'
  }
};

String.prototype.render = function (obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const fn = new Function(...keys, `return \`${this}\``);
  return fn(...values)
};

var result = greeting.render(employee);

console.log(result);