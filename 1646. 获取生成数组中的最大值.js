/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  const arr = new Array(n + 1).fill(0);
  if (arr.length > 1) arr[1] = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i * 2 >= 2 && i * 2 <= n) {
      arr[2 * i] = arr[i];
    }
    if (2 <= 2 * i + 1 && 2 * i + 1 <= n) {
      arr[2 * i + 1] = arr[i] + arr[i + 1];
    }
  }
  return Math.max(...arr);
};
