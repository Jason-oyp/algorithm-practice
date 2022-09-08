/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const oneArr = JSON.parse("[" + grid.toString() + "]");
  const len = oneArr.length;
  const row = grid.length,
    col = grid[0].length;
  const i = k % len;
  const changeArr = [
    ...oneArr.slice(len - i, len),
    ...oneArr.slice(0, len - i),
  ];
  const result = new Array(row).fill(0).map((it) => new Array(col).fill(0));

  for (let i = 0, s = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result[i][j] = changeArr[s++];
    }
  }
  return result;
};
