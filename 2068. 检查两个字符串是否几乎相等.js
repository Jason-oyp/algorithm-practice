/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  let map = new Map();
  for (let ch of word1) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  // return map
  for (let ch of word2) {
    map.set(ch, (map.get(ch) || 0) - 1);
  }
  // return map
  for (let v of map.values()) {
    if (Math.abs(v) > 3) return false;
  }
  return true;
};
