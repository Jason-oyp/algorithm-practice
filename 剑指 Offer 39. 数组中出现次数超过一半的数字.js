/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
    if (map[nums[i]] > len / 2) {
      return nums[i];
    }
  }
};
