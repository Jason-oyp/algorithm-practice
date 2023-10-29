/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  const arr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[j] > nums[k]) {
          arr.push(nums[i] + nums[j] + nums[k]);
        }
      }
    }
  }
  return arr.length ? Math.min(...arr) : -1;
};
