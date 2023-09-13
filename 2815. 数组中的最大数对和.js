/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let sum = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const m = String(nums[i]),
        n = String(nums[j]);
      const maxM = Math.max(...m);
      const maxN = Math.max(...n);
      if (maxM === maxN) {
        sum = Math.max(sum, nums[i] + nums[j]);
      }
    }
  }
  return sum;
};
