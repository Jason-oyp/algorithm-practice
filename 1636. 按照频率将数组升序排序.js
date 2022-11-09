/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const count = {};
  nums.forEach((num) => (count[num] = count[num] + 1 || 1));
  nums.sort((a, b) => {
    if (count[a] === count[b]) return b - a;
    return count[a] - count[b];
  });
  return nums;
};
