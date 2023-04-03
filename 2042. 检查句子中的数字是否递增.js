/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  s = s
    .replace(/[a-z]/g, "")
    .split(/\s+/)
    .filter((it) => it);
  for (let i = 1; i < s.length; i++) {
    if (+s[i] <= +s[i - 1]) {
      return false;
    }
  }
  return true;
};
