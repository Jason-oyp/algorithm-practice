/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((prev, next) => prev + next);
  let left = 0,
    right = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      left = 0;
      right = sum - nums[i];
    } else {
      left = left + nums[i - 1];
      right = right - nums[i];
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
};
var pivotIndex = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) {
      return i;
    }
    sum += nums[i];
  }
  return -1;
};
