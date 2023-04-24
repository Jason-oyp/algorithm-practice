/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  if (nums.length <= 2) {
    return nums;
  }
  const odd = [],
    even = [];
  for (let i = 0; i < nums.length; i++) {
    if (i & 1) {
      odd.push(nums[i]);
    } else {
      even.push(nums[i]);
    }
  }
  odd.sort((a, b) => b - a);
  even.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i & 1) {
      nums[i] = odd.shift();
    } else {
      nums[i] = even.shift();
    }
  }
  return nums;
};
