/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }

      if (target > sum) {
        left++;
      } else if (target < sum) {
        right--;
      } else {
        return sum;
      }
    }
  }
  return ans;
};
