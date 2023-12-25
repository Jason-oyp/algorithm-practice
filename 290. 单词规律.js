/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  pattern = pattern.split("");
  console.log(s, pattern);
  if (s.length !== pattern.length) {
    return false;
  }
  const map = new Map(),
    set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (map.get(pattern[i])) {
      if (map.get(pattern[i]) !== s[i]) {
        return false;
      }
      continue;
    } else {
      if (set.has(s[i])) {
        return false;
      }
      set.add(s[i]);
      map.set(pattern[i], s[i]);
    }
  }
  return true;
};
