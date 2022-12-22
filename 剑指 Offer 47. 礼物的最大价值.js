/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const map = {};
  function test(grid, m, n) {
    if (map[`${m}*${n}`] !== undefined) {
      return map[`${m}*${n}`];
    }

    if (m < 0 || n < 0) {
      return 0;
    }

    map[`${m}*${n}`] =
      Math.max(test(grid, m - 1, n), test(grid, m, n - 1)) + grid[m][n];

    return map[`${m}*${n}`];
  }
  return test(grid, grid.length - 1, grid[0].length - 1);
};
