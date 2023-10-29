Promise.myRace = function (pArr) {
  return new Promise((resolve, reject) => {
    pArr.forEach((p) => {
      if (p.then && typeof p.then === "function") {
        p.then(resolve, reject);
      } else {
        resolve(p);
      }
    });
  });
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.myRace([p1, p2, p3]).then((res) => {
  console.log(res);
});
