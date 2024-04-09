async function task() {
  console.log(1);
  return 3;
}

task().then(res => {
  console.log(res);
});

console.log(2);

setTimeout(() => {
  console.log(4);
}, 1000);
