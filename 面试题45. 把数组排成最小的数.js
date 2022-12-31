/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums = nums.sort((a, b) => {
    console.log(a, b);
    return Number(String(a) + b) - Number(String(b) + a);
  });
  console.log(nums);
  return nums.join("");
};
