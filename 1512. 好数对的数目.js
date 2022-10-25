/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  let result = 0;
  Object.values(map).forEach((it) => {
    let count = 0;
    for (let i = 1; i < it; i++) {
      count += i;
    }
    result += count;
  });
  return result;
};
