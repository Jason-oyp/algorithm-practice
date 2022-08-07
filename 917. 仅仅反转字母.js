/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const arr = [];
  const reg = /^[a-zA-Z]$/;
  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i])) {
      arr.push(s[i]);
    }
  }
  arr.reverse();
  const result = [];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i])) {
      result.push(arr[j++]);
    } else {
      result.push(s[i]);
    }
  }
  return result.join("");
};
