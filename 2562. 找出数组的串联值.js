/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  // if (nums.length === 1) {
  //     return nums[0]
  // }
  let left = 0,
    right = nums.length - 1,
    ans = 0;
  while (left <= right) {
    if (left === right) {
      ans += nums[left];
    } else {
      ans += Number(nums[left] + "" + nums[right]);
    }
    left++;
    right--;
  }
  return ans;
};
