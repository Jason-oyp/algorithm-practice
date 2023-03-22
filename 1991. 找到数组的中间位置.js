/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let left = 0,
    right = 0;
  const sum = nums.reduce((a, b) => a + b);
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    right = sum - left - cur;
    if (left === right) {
      return i;
    }
    left += cur;
  }
  return -1;
};
