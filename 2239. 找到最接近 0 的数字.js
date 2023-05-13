/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);
  let min = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      min = Math.max(min, nums[i]);
    } else if (nums[i] === 0) {
      return 0;
    } else {
      if (min === Number.MIN_SAFE_INTEGER) {
        return nums[i];
      }
      if (Math.abs(min) < nums[i]) {
        return min;
      }
      return nums[i];
    }
  }

  return min;
};
