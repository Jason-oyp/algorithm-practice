/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let min = nums[0],
    result = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else {
      result = Math.max(result, nums[i] - min);
    }
  }
  return result;
};
