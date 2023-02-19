/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let result = nums[0],
    last = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      result = Math.max(result, last + nums[i]);
      last = last + nums[i];
    } else {
      last = nums[i];
      result = Math.max(result, last);
    }
  }
  return result;
};
