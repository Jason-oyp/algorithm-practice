/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const length = nums.length;
  const map = {};
  for (let i = 0; i < length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    }
  }
  const result = [];
  for (let j = 1; j <= length; j++) {
    if (!map[j]) {
      result.push(j);
    }
  }
  return result
};
