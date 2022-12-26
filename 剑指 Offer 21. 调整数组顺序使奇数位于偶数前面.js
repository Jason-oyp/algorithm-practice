/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var exchange = function (nums) {
//     const left = []
//     const right = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] & 1) {
//             left.push(nums[i])
//         } else {
//             right.push(nums[i])
//         }
//     }
//     return [...left, ...right]
// };

var exchange = function (nums) {
  const result = new Array(nums.length).fill(0);
  let left = 0,
    right = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & 1) {
      result[left++] = nums[i];
    } else {
      result[right--] = nums[i];
    }
  }
  return result;
};
