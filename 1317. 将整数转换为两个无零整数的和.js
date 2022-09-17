/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let i = 1; i < n; i++) {
    const sub = n - i;
    if (String(i).indexOf("0") === -1 && String(n - i).indexOf("0") === -1) {
      return [i, n - i];
    }
  }
};
