/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((it) => it === "1").length;
};
