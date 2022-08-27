/**
 * @param {number} n
 * @return {number}
 */

const map = {};
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  // if (map[n]) return map[n]
  // map[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
  // return map[n]
  let one = 0,
    two = 1,
    three = 1,
    sum = 2;
  for (let i = 3; i <= n; i++) {
    sum = one + two + three;
    one = two;
    two = three;
    three = sum;
  }
  return sum;
};
