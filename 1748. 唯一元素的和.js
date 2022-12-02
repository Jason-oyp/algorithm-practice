/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 1;
  }
  let count = 0;
  Object.entries(map).forEach((it) => {
    if (it[1] === 1) {
      count += +it[0];
    }
  });
  return count;
};
