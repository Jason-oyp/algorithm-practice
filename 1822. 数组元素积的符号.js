/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  const result = nums.reduce((a, b) => {
    return a * b;
  }, 1);
  return signFunc(result);
};

function signFunc(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}
