/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  let pos = 0,
    len = 0;
  for (let i = 0; i < s.length; i++) {
    let small = 0,
      big = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] >= "a" && s[j] <= "z") {
        // 该字母为小写
        small |= 1 << (s[j].charCodeAt() - "a".charCodeAt());
      } else {
        // 该字母为大写
        big |= 1 << (s[j].charCodeAt() - "A".charCodeAt());
      }
      if (small === big && j - i + 1 > len) {
        // 出现美好字符串，比较一下存起来
        pos = i;
        len = j - i + 1;
      }
    }
  }
  return s.slice(pos, pos + len);
};
