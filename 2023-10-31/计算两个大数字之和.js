/**
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */
function sum(s1, s2) {
  const len = Math.max(s1.length, s2.length);
  const n1 = s1.padStart(len, "0");
  const n2 = s2.padStart(len, "0");
  let high = 0;
  let result = "";

  for (let i = len - 1; i >= 0; i--) {
    let sum = +n1[i] + +n2[i] + high;
    high = sum >= 10 ? 1 : 0;
    result = (sum % 10) + result;
  }

  if (high) {
    result = "1" + result;
  }

  return result;
}

console.log(sum("123456789", "923456789"));
