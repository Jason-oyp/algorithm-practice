/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    // 判断每行是否有重复
    if (matrix[i].length !== [...new Set(matrix[i])].length) {
      return false;
    }
    // 判断每列是否有重复
    let arr = [];
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i]);
    }
    if (arr.length !== [...new Set(arr)].length) {
      return false;
    }
  }
  return true;
};
