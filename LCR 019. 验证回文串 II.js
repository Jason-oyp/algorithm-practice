/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const isPalindrome = (slow, fast) => {
    for (let i = slow, j = fast; i < j; i++, j--) {
      if (s[i] != s[j]) return false;
    }
    return true;
  };

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
  }
  return true;
};
