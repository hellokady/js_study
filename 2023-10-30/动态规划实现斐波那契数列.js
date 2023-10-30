function fibonacci(n) {
  let n1 = 1,
    n2 = 1;

  for (let i = 2; i < n; i++) {
    [n1, n2] = [n2, n1 + n2];
  }

  return n2;
}

console.log(fibonacci(10));
