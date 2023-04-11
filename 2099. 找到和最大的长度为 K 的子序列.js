/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  nums = nums.map((item, index) => {
    return {
      item,
      index,
    };
  });
  nums = nums.sort((a, b) => b.item - a.item);
  nums = nums.slice(0, k);
  nums = nums.sort((a, b) => a.index - b.index);
  return nums.map((item) => item.item);
};
