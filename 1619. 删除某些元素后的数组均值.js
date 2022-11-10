/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const num = n * 0.05;
  return (
    arr.slice(num, n - num).reduce((prev, next) => prev + next, 0) /
    (n - 2 * num)
  );
};
