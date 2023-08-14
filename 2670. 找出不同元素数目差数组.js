/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const arr = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums.slice(0, i + 1), nums.slice(i + 1))
    const left = new Set(nums.slice(0, i + 1)).size;
    const right = new Set(nums.slice(i + 1)).size;
    arr[i] = left - right;
  }
  return arr;
};
