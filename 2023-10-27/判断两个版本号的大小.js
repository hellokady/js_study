function *walk (str) {
  let result = '';
  const chars = ['.','-'];
  for (let i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      yield result;
      result = '';
    } else {
      result += str[i];
    }
  }

  if (result) {
    yield result;
  }
}

function compareVersions(v1, v2) {
 const t1 = walk(v1);
 const t2 = walk(v2);

 let r1 = t1.next();
 let r2 = t2.next();

 while(!r1.done && !r2.done) {
   if (r1.value === r2.value) {
      r1 = t1.next();
      r2 = t2.next();
      continue;
   }
   
   return r1.value > r2.value ? 1 : -1;
 }

 if (r1.done && r2.done) {
  return 0;
 }

 if (+r1.value) {
  return 1;
 } else if (+r2.value) {
  return -1;
 } else {
  return 0;
 }
}

console.log(compareVersions('1.1.0', '1.1'));
console.log(compareVersions('1.1', '1.1.0'));
console.log(compareVersions('1.2', '1.1.0'));
console.log(compareVersions('1.1.0', '1.2'));
console.log(compareVersions('1.1', '1.1.2'));
console.log(compareVersions('1.1.1.0', '1.1.1.1'));
console.log(compareVersions('1.1.1', '1.1.1'));
console.log(compareVersions('2.1.2', '1.1'));
console.log(compareVersions('2', '2'));
console.log(compareVersions('7.5.2.4', '7.5.3'));
console.log(compareVersions('1.0.1', '1.0.0.1'));
console.log(compareVersions('1.0.1', '1.0.1'));
