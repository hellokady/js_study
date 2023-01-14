// 判断一个字符串是否是闭合字符串；字符串内的字符串仅限于"[{()}]"

let str = '[{}]';

const validate = (s) => {
  const map = {
    '[': ']',
    '{': '}',
    '(': ')'
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      if (map[stack.pop()] !== s[i]) return false;
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}

console.log(validate(str));
