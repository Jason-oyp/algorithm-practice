/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  if (words.length === 1) return true;
  const sss = words.reduce((a, b) => a + b, "").split("");
  const map = {};
  for (let i = 0; i < sss.length; i++) {
    if (map[sss[i]]) {
      map[sss[i]]++;
    } else {
      map[sss[i]] = 1;
    }
  }

  const arr = Object.values(map);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % words.length !== 0) {
      return false;
    }
  }
  return true;
};
