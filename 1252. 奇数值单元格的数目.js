/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const arr = new Array(m).fill(0).map((it) => new Array(n).fill(0));
  for (let i = 0; i < indices.length; i++) {
    const [row, col] = indices[i];
    arr[row] = arr[row].map((it) => it + 1);
    for (let j = 0; j < m; j++) {
      arr[j][col]++;
    }
  }

  // 计算奇数个数
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] & 1) {
        count++;
      }
    }
  }
  return count;
};
