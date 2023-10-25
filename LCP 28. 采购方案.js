/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function (nums, target) {
  let i = 0,
    j = nums.length - 1,
    ans = 0;
  nums.sort((a, b) => a - b);
  while (i < j) {
    if (nums[i] + nums[j] > target) j--;
    else {
      ans += j - i;
      i++;
    }
  }
  return ans % 1000000007;
};
