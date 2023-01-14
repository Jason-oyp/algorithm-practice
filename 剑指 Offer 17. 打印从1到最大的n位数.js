/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const max = +new Array(n).fill(9).join("");
  const arr = new Array(max).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  return arr;
};
