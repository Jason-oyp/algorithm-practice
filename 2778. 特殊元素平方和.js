/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  const arr = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums.length % i === 0) {
      arr.push(nums[i - 1]);
    }
  }
  // console.log(arr)
  return arr.map((it) => it * it).reduce((a, b) => a + b);
};
