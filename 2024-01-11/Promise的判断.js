new Promise(resolve => {
  console.log(0);
  resolve();
})
  .then(() => {
    console.log(1);
    return new Promise(resolve => resolve(5));
  })
  .then(res => {
    console.log(res);
  });

new Promise(resolve => {
  console.log(2);
  resolve()
})
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  })
  .then(() => {
    console.log(6);
  })
  .then(() => {
    console.log(7);
  });
