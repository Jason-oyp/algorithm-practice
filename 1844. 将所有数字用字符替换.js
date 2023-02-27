/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (i & 1) {
      const c = s[i - 1];

      const res = String.fromCharCode(c.charCodeAt() + Number(s[i]));
      result += res;
    } else {
      result += s[i];
    }
  }
  return result;
};
