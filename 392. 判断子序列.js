/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (s.length !== 0 && t.length === 0) return false;
  let si = 0,
    ti = 0;
  while (ti < t.length) {
    if (s[si] === t[ti]) {
      if (si === s.length - 1) {
        return true;
      }
      si++;
    }
    ti++;
  }
  return false
};
