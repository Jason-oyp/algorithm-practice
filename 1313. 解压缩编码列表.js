/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const arr = [];
  for (let i = 1; i < nums.length; i += 2) {
    arr.push(...new Array(nums[i - 1]).fill(nums[i]));
  }
  return arr;
};
