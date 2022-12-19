/**
 * @param {number} n
 * @return {number}
 */
const map = {};
var fib = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let first = 1,
    second = 1,
    result;
  for (let i = 3; i <= n; i++) {
    result = (first + second) % 1000000007;
    first = second;
    second = result;
  }
  return result;
};
