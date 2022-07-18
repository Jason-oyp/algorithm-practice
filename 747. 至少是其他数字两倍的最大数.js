/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  const max = Math.max(...nums);
  const twoArr = nums.filter((item) => item !== max).map((item) => item * 2);
  for (let i = 0; i < twoArr.length; i++) {
    if (max < twoArr[i]) {
      return -1;
    }
  }
  return nums.indexOf(max);
};
