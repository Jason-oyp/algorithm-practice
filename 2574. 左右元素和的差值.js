/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const answer = new Array(nums.length).fill(0);
  const sum = nums.reduce((a, b) => a + b);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = Math.abs(leftSum - (sum - leftSum - nums[i]));
    leftSum += nums[i];
  }
  return answer;
};
