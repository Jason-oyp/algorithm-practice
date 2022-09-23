/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  if (num === 0) return 0;
  let count = 0;

  function _numberOfSteps(num) {
    if (num === 0) return count;
    count++;
    if (num & 1) {
      return _numberOfSteps(num - 1);
    } else {
      return _numberOfSteps(num / 2);
    }
  }

  return _numberOfSteps(num);
};
