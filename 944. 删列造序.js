/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let count = 0;
  const row = strs.length,
    col = strs[0].length;
  if (row === 1) {
    return 0;
  }
  console.log(row, col);
  for (let i = 0; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        count++;
        break;
      }
    }
  }
  return count;
};
