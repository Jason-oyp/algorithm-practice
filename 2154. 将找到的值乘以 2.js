/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  if (nums.includes(original)) {
    return findFinalValue(nums, original * 2);
  }
  return original;
};
