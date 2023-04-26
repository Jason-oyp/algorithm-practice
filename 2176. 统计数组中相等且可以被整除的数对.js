/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        if ((j * i) % k === 0) {
          count++;
        }
      }
    }
  }
  return count;
};
