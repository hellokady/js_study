class Example {}

const example = new Example();

console.log(example.__proto__ === Example.prototype);
console.log(example.__proto__.constructor === Example);
console.log(Example.prototype.__proto__ === Object.prototype);
console.log(Example.prototype.__proto__.__proto__ === Object.prototype.__proto__);
console.log(Example.__proto__ === Function.prototype);