/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = {};
  let mostNum = -1,
    arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]].end = i;
      map[nums[i]].num++;
    } else {
      map[nums[i]] = {
        start: i,
        num: 1,
        end: i,
      };
    }
    if (mostNum < map[nums[i]].num) {
      mostNum = map[nums[i]].num;
      arr = [nums[i]];
      continue;
    }
    if (mostNum === map[nums[i]].num) {
      arr.push(nums[i]);
    }
  }
  let result = Number.MAX_SAFE_INTEGER;
  for (let j = 0; j < arr.length; j++) {
    result = Math.min(map[arr[j]].end - map[arr[j]].start + 1, result);
  }
  return result;
};
