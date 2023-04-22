/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== min && nums[i] !== max) {
      count++;
    }
  }
  return count;
};
