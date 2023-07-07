/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let n = 0,
    p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      n++;
    }
    if (nums[i] === 0) {
      continue;
    }
    if (nums[i] > 0) {
      p = nums.length - i;
      break;
    }
  }
  return Math.max(n, p);
  // if (nums.length === 1) {
  //     if (nums[0] === 0) return 0
  //     return 1
  // }
  // let left = 0; right = nums.length - 1
  // let n = 0; p = 0;
  // while (left <= right) {
  //     if (left === right) {
  //         if (nums[left] < 0) {
  //             n++
  //         }
  //         if (nums[left] > 0) {
  //             p++
  //         }
  //         break
  //     }
  //     if (nums[left] < 0) {
  //         n++
  //     }
  //     if (nums[left] > 0) {
  //         p++
  //     }
  //     if (nums[right] < 0) {
  //         n++
  //     }
  //     if (nums[right] > 0) {
  //         p++
  //     }
  //     left++
  //     right--
  // }
  // return Math.max(n, p)
};
