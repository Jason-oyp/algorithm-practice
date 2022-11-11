/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]].push(i);
    } else {
      map[s[i]] = [i];
    }
  }
  let result = -1;
  for (const arr in map) {
    const temp = map[arr];
    if (temp.length !== 1) {
      result = Math.max(result, temp[temp.length - 1] - temp[0] - 1);
    }
  }
  return result;
};
