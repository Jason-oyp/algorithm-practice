/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  return nums[len - 1] * nums[len - 2] - nums[0] * nums[1];
};
