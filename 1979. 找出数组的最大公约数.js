/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  function _gongyue(a, b) {
    const temp = Math.max(a, b);
    for (let i = temp; i >= 1; i--) {
      if (a % i === 0 && b % i === 0) {
        return i;
      }
    }
  }
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return _gongyue(min, max);
};
