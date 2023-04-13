/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  function huiwen(str) {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  for (let i = 0; i < words.length; i++) {
    if (huiwen(words[i])) {
      return words[i];
    }
  }
  return "";
};
