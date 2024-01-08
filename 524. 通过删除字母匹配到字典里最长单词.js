/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let res = "";
  for (const t of dictionary) {
    let i = 0,
      j = 0;
    while (i < t.length && j < s.length) {
      if (t[i] === s[j]) {
        ++i;
      }
      ++j;
    }
    if (i === t.length) {
      if (t.length > res.length || (t.length === res.length && t < res)) {
        res = t;
      }
    }
  }
  return res;
};
