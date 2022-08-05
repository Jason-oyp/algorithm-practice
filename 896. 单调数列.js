/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let add, sub;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      sub = true;
    } else if (nums[i] > nums[i - 1]) {
      add = true;
    }
    if (add && sub) {
      return false;
    }
  }
  return true;
};
