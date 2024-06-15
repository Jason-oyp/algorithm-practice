/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  if (nums.length === 1) {
    return nums[0] + 1;
  }
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
        maxSum += nums[i];
    } else {
      break;
    }
  }
  if (!nums.includes(maxSum)) return maxSum;
  while (true) {
    if (!nums.includes((maxSum += 1))) {
      return maxSum;
    }
  }
};
