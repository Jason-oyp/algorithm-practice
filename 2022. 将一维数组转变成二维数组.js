/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) {
    return [];
  }

  const arr = new Array(m).fill(0).map((it) => new Array(n).fill(0));
  let k = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = original[k++];
    }
  }
  return arr;
};
