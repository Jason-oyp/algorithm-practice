/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];
  const left = nums.slice(0, n);
  const right = nums.slice(n, nums.length);
  for (let i = 0; i < n; i++) {
    result.push(left[i]);
    result.push(right[i]);
  }
  return result;
};
