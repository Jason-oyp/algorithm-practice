/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  for (let i = Math.floor(s.length / 2); i > 0; i--) {
    if (new RegExp(`.*0{${i}}1{${i}}.*`).test(s)) {
      return i * 2;
    }
  }
  return 0;
};
