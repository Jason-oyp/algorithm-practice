/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  const arr = Object.entries(map).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i][0] % 2 === 0) {
      return +arr[i][0];
    }
  }
  return -1;
};
