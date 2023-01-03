/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let num = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    const prev = nums[i];
    const next = nums[i + 1];
    if (prev === 0) {
      num++;
    } else if (prev === next) {
      return false;
    } else if (next - prev > 1) {
      const gap = next - prev - 1;
      num -= gap;
      if (num < 0) {
        return false;
      }
    }
  }
  return true;
};
