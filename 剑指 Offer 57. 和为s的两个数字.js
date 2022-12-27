/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     const set = new Set()
//     for (let i = 0; i < nums.length; i++) {
//         if (set.has(target - nums[i])) {
//             return [target - nums[i], nums[i]]
//         } else {
//             set.add(nums[i])
//         }
//     }
// };
var twoSum = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [nums[left], nums[right]];
    }
  }
  return [];
};
