/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
      continue;
    }
    let le = left,
      ri = right;
    le++;
    while (le < ri) {
      if (s[le] === s[ri]) {
        le++;
        ri--;
        continue;
      }
      let l = left,
        r = right;
      r--;
      while (l < r) {
        if (s[l] === s[r]) {
          l++;
          r--;
          continue;
        }
        return false;
      }
      return true;
    }
    return true;
  }
  return true;
};
