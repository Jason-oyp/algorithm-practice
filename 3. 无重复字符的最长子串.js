/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let left = 0,
    right = 1,
    max = 0;
  while (right < s.length) {
    const temp = s.slice(left, right);
    if (temp.indexOf(s[right]) > -1) {
      left++;
      continue;
    } else {
      right++;
    }
    max = Math.max(max, right - left);
  }
  return max;
};
