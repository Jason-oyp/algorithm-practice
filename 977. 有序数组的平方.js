/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((it) => it ** 2).sort((a, b) => a - b);
};
