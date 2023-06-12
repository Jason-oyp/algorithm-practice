/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i);
    const left = s.indexOf(letter);
    const right = s.lastIndexOf(letter);
    if (left === -1) continue;
    if (right - left - 1 !== distance[i]) return false;
  }
  return true;
};
