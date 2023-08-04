/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  const m = mat.length;
  const arr = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    arr[i] = mat[i].filter((it) => it === 1).length;
  }
  const max = Math.max(...arr);
  const index = arr.indexOf(max);
  return [index, max];
};
