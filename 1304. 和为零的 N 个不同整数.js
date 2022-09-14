/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  if (n === 1) return [0];

  const arr = [];
  const num = Math.floor(n / 2);
  for (let i = num; i > 0; i--) {
    arr.push(i, 0 - i);
  }
  n & 1 && arr.push(0);
  return arr;
};
