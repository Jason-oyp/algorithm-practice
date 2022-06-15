/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  let result = 0;
  const arr = Object.values(map).sort((a, b) => b - a);
  let addOne = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += arr[i];
    } else if (arr[i] % 2 !== 0 && arr[i] !== 1) {
      result += arr[i] - 1;
      addOne = true;
    } else if (arr[i] === 1) {
      return result + 1;
    }
  }
  return addOne ? result + 1 : result;
};

console.log(longestPalindrome("abccccdd"));
