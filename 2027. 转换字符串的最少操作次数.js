/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].includes("X")) {
      count++;
      i += 2;
    }
  }
  return count;
};
