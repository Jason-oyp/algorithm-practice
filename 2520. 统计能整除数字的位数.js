/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const arr = num.toString().split("");
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num % +arr[i] === 0) {
      ans++;
    }
  }
  return ans;
};
