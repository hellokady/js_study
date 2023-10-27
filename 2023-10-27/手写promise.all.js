Promise.myAll = function (pArr) {
  return new Promise((resolve, reject) => {
    let result = [],
      workedIndex = 0;

    pArr.forEach((p, i) => {
      if (p.then && typeof p.then === "function") {
        p.then((res) => saveResultByIndex(i, res), reject);
      } else {
        saveResultByIndex(i, p);
      }
    });

    function saveResultByIndex(index, value) {
      result[index] = value;
      if (pArr.length === ++workedIndex) {
        resolve(result);
      }
    }
  });
};

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  resolve(2);
});
const p3 = new Promise((resolve,reject) => {
  resolve(3);
});

const p4 = Promise.myAll([p1, p2, p3]);

p4.then((res) => {
  console.log(res);
});
