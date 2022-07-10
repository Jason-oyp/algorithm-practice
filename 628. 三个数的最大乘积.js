/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  const left = nums[0] * nums[1];
  const right = nums[length - 3] * nums[length - 2];
  let result = left > right ? left : right;
  if (nums[length - 1] <= 0) {
    result = right;
  }
  return result * nums[length - 1];
};
