/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let R = 0,
    L = 0,
    count = 0;
  for (const p of s) {
    if (p === "R") {
      R++;
    } else {
      L++;
    }
    if (R === L) {
      count++;
      R = 0;
      L = 0;
    }
  }
  return count;
};
