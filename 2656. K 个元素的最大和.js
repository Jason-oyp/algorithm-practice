/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  return Math.max(...nums) * k + ((k - 1) * k) / 2;
};
