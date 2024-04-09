const a = {};

Object.defineProperty(a, 'name', {
  value: 'ok'
});

a.name = 'hhh';
delete a.name;

console.log(a.name);
