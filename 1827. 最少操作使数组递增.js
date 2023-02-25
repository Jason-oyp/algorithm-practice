/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count += nums[i - 1] + 1 - nums[i];
    } else if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      continue;
    }
    nums[i] = nums[i - 1] + 1;
  }
  return count;
};
