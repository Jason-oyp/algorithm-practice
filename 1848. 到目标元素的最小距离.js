/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result = Math.min(Math.abs(i - start), result);
    }
  }
  return result;
};
