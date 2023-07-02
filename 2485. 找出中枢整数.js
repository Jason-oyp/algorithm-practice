/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  const sum = ((n + 1) * n) / 2;
  let left = 0,
    right = 0;
  for (let i = 1; i <= n; i++) {
    left += i;
    right = sum - left + i;
    if (left === right) {
      return i;
    }
  }
  return -1;
};
