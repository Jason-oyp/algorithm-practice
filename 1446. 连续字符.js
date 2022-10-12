/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let ss = s[0];
  let max = 1;
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ss) {
      count++;
    } else {
      max = Math.max(max, count);
      ss = s[i];
      count = 1;
    }
  }
  return Math.max(max, count);
};
