/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let result = 0;
  let count = 0;
  for (const p of s) {
    if (p === "(") {
      count++;
    }
    if (p === ")") {
      result = Math.max(result, count);
      count--;
    }
  }
  return result;
};
