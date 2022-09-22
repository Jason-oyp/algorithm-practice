/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const arr = [];
  const row = mat.length,
    col = mat[0].length;
  for (let i = 0; i < row; i++) {
    let count = 0;
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 1) {
        count++;
      } else {
        break;
      }
    }
    arr.push([count, i]);
  }
  arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else {
      return 1;
    }
  });
  return arr.map((it) => it[1]).slice(0, k);
};
