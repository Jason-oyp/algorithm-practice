/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  let first = 1,
    second = 2,
    third = 4;
  let result = 1;
  if (n === 2) {
    result = 2;
  }
  if (n === 3) {
    result = 4;
  }
  for (let i = 4; i <= n; i++) {
    result = (first + second + third) % 1000000007;
    first = second;
    second = third;
    third = result;
  }
  return result;
};
