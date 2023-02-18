/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length;
  let count;
  if (len & 1) {
    count = Math.ceil(len / 2);
  } else {
    count = len / 2 + 1;
  }
  const map = {};
  for (let i = 0; i < len; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
    if (map[nums[i]] === count) {
      return nums[i];
    }
  }
  return -1;
};
