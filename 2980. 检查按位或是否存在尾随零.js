/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & 1) === 0) {
      ans++;
      if (ans > 1) return true;
    }
  }
  return false;
};
