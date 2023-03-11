/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map((it, i) => nums[nums[i]]);
};
