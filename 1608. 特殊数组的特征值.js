/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let i = 0;
  nums.sort((a, b) => a - b);
  while (true) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] >= i) {
        count++;
      }
    }
    if (count === i) {
      return i;
    }
    if (i === 100) return -1;
    i++;
  }
};
