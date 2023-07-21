/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  n = n.toString(2).split("").reverse();
  const result = [0, 0];
  for (let i = 0; i < n.length; i++) {
    if (n[i] === "1") {
      if (i & 1) {
        result[1]++;
      } else {
        result[0]++;
      }
    }
  }
  return result;
};
