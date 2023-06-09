/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const arr = new Array(grid.length - 2)
    .fill(0)
    .map(_ => new Array(grid.length - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          arr[i][j] = Math.max(arr[i][j], grid[x][y]);
        }
      }
    }
  }
  return arr;
};
