/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  let m = nums.length;
  let n = nums[0].length;
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i === j || i + j === n - 1) && isPrime(nums[i][j])) {
        result = Math.max(result, nums[i][j]);
      }
    }
  }
  return result;
};

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  const sq = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
