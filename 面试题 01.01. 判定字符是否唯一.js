/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  const map = {};
  for (const s of astr) {
    if (map[s]) {
      return false;
    } else {
      map[s] = true;
    }
  }
  return true;
};
