/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let aCount = 0,
    bCount = 0,
    len = s.length / 2,
    lists = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < s.length; i++) {
    if (lists.includes(s[i])) {
      if (i < len) {
        aCount++;
      } else {
        bCount++;
      }
    }
  }
  return aCount === bCount;
};
