/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  const arr = new Array(n ** 2).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[grid[i][j] - 1]++;
    }
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      res[0] = i + 1;
    } else if (arr[i] === 0) {
      res[1] = i + 1;
    }
  }
  return res;
};
