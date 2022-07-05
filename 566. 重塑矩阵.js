/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const temp = [];
  function _bianli(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        _bianli(arr[i]);
        continue;
      }
      temp.push(arr[i]);
    }
  }
  _bianli(mat);
  if (temp.length !== r * c) {
    return mat;
  }
  const result = [];
  let n = 0;
  for (let j = 0; j < r; j++) {
    result[j] = [];
    for (let k = 0; k < c; k++) {
      result[j][k] = temp[n++];
    }
  }
  return result;
};
