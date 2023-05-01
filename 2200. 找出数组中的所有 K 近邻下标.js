/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const result = [];
  const arr = [];
  nums.forEach((it, index) => {
    if (it === key) {
      arr.push(index);
    }
  });
  if (!arr.length) return [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Math.abs(i - arr[j]) <= k) {
        result.push(i);
        break;
      }
    }
  }
  return result;
};
