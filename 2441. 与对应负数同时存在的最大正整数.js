/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && nums.includes(-nums[i])) {
      return -nums[i];
    }
  }
  return -1;
};
