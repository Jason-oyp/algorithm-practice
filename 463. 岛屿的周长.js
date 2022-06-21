/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  let num = 0;
  let border = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        num++;
        if (j < col - 1 && grid[i][j + 1]) {
          border++;
        }
        if (i < row - 1 && grid[i + 1][j]) {
          border++;
        }
      }
    }
  }
  return 4 * num - 2 * border;
};
