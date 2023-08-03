/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < m; j++) {
      max = Math.max(max, String(grid[j][i]).length);
    }
    result[i] = max;
  }
  return result;
};
