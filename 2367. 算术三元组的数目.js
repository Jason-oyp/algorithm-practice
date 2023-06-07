/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const set = new Set(nums);
  let ans = 0;
  for (const n of set) {
    if (set.has(n + diff) && set.has(n + 2 * diff)) {
      ans++;
    }
  }
  return ans;
};
