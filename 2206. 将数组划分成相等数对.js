/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.values(map).every((it) => it % 2 === 0);
};
