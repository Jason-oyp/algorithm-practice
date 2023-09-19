/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i];
    for (let j = temp[0]; j <= temp[1]; j++) {
      set.add(j);
    }
  }
  return set.size;
};
