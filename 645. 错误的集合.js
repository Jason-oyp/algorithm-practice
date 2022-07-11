/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 0) {
      result[0] = nums[i];
      nums.splice(i, 1);
    }
  }
  let j = 0;
  while (j < nums.length) {
    if (nums[j] === j + 1) {
      j++;
    } else {
      break;
    }
  }
  result[1] = j + 1;
  return result;
};
