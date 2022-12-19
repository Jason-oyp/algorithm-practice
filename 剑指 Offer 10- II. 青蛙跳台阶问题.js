/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let first = 1,
    second = 1,
    result = 1;
  for (let i = 2; i <= n; i++) {
    result = (first + second) % 1000000007;
    first = second;
    second = result;
  }
  return result;
};
