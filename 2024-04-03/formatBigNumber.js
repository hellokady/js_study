function formatBigNumber(str) {
  let result = [];
  const reverseStr = str.split('').reverse()

  for (let i = 0; i < reverseStr.length; i++) {
    const item = reverseStr[i];
    result.push(item);
    if (((2 * i) - 1 ) % 3 === 0) {
      result.push(',');
    }
  }

  return result.reverse().join('');
}

console.log(formatBigNumber('178100200300'));
