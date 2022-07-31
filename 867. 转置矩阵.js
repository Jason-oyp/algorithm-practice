/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let row = matrix.length,
    col = matrix[0].length;
  const arr = new Array(col).fill(0).map((it) => new Array(row));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arr[j][i] = matrix[i][j];
    }
  }
  return arr;
};
