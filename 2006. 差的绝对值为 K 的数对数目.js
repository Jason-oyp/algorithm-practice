/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let res = 0,
    n = nums.length;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (Math.abs(nums[i] - nums[j]) == k) {
        ++res;
      }
    }
  }
  return res;
};
