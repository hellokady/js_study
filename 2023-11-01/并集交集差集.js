const a1 = [1, 2, 4, 5];
const a2 = [1, 1, 2, 3];

// 并集
const s1 = [...new Set([...a1, ...a2])];

// 交集
const s2 = [...new Set([...a1])].filter((i) => a2.includes(i));

// 差集
const s3 = s1.filter((i) => !s2.includes(i));

console.log(s1, s2, s3);
