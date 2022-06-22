/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const result = nums
    .join("")
    .split(0)
    .filter((item) => item);
  const arr = [];
  result.forEach((item) => arr.push(item.length));
  if (arr.length === 0) return 0;
  return Math.max(...arr);
};




/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return Math.max(max, count);
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0]);
