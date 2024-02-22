/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    two: for (let j = i; j < nums.length; j++) {
      const left = nums.slice(0, i);
      const right = nums.slice(j + 1);
      const newArr = [...left, ...right];
      for (let k = 1; k < newArr.length; k++) {
        if (newArr[k] <= newArr[k - 1]) {
          continue two;
        }
      }
      ans++;
    }
  }
  return ans;
};
