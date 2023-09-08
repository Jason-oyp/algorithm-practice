/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  // if (nums.length === 1) {
  //     return false
  // }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      if (nums[i] !== i) return false;
    } else {
      if (nums[i] !== i + 1) return false;
    }
  }
  return true;
};
