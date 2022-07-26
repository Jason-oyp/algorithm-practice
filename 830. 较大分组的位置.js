/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  if (s.length < 3) return [];
  let cur = "";
  let start = 0;
  let end = 0;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== cur) {
      if (end - start >= 2) {
        result.push([start, end]);
      }
      cur = s[i];
      start = end = i;
    } else {
      end = i;
    }
  }
  if (end - start >= 2) {
    result.push([start, end]);
  }
  return result;
};
