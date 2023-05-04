/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key && i !== nums.length - 1) {
      if (map[nums[i + 1]]) {
        map[nums[i + 1]]++;
      } else {
        map[nums[i + 1]] = 1;
      }
    }
  }
  const arr = Object.entries(map).sort((a, b) => b[1] - a[1]);
  if (arr[0]) {
    return arr[0][0];
  }
};
