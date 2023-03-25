/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  let cnt = 0;
  const n = nums.length;
  for (let a = 0; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      for (let c = b + 1; c < n; c++) {
        for (let d = c + 1; d < n; d++) {
          if (nums[a] + nums[b] + nums[c] === nums[d]) cnt++;
        }
      }
    }
  }
  return cnt;
};
