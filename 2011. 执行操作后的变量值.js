/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("-")) {
      result--;
    } else {
      result++;
    }
  }
  return result;
};
