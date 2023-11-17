async function fn1() {
  return 1;
}

fn1().then((res) => {
  console.log(res);
});

console.log(2);

// async function fn2() {
//   await fn3();
//   console.log(4);
// }
// 上述fn2等于下面示例
function fn2() {
  return Promise.resolve(fn3()).then(() => {
    console.log(4);
  });
}

async function fn3() {
  console.log(5);
}

fn2();

console.log(3);
