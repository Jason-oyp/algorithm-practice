/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!((nums[i] + "").length & 1)) {
      count++;
    }
  }
  return count;
};
