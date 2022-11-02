/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let n = mat.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    res += mat[i][i];
    let j = n - 1 - i;
    if (j !== i) res += mat[i][j];
  }

  return res;
};
