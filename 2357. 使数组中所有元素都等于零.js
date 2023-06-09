/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[nums.length - 1] === 0) return 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (i === nums.length - 1) {
        return count;
      }
      continue;
    }
    nums = nums.map((it) => {
      if (it === 0) {
        return 0;
      }
      return it - nums[i];
    });
    count++;
  }
  return count;


  // * 下面是解法二    就是求里面正整数的个数（去重）
  return [...new Set(nums)].filter((it) => it).length;
};
