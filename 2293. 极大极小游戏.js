/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const arr = new Array(nums.length / 2).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (i & 1) {
      arr[i] = Math.max(nums[i * 2], nums[i * 2 + 1]);
    } else {
      arr[i] = Math.min(nums[i * 2], nums[i * 2 + 1]);
    }
  }
  return minMaxGame(arr);
};
