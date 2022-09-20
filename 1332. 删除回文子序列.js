/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right && left !== right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return 2;
    }
  }
  return 1;
};
