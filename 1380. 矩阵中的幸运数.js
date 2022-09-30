/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const result = [];
  const row = new Set();
  const col = new Set();
  const len = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    row.add(Math.min(...matrix[i]));
  }
  for (let j = 0; j < matrix[0].length; j++) {
    col.add(
      Math.max(...new Array(len).fill(0).map((it, index) => matrix[index][j]))
    );
  }
  row.forEach((it) => {
    if (col.has(it)) {
      result.push(it);
    }
  });
  return result;
};
