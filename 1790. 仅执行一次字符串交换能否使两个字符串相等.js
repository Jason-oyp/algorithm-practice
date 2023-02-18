/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  let i = 0,
    a = "",
    b = "";
  let count = 0;
  while (i < s1.length) {
    if (count > 2) return false;
    if (s1[i] !== s2[i]) {
      a += s1[i];
      b += s2[i];
      count++;
    }
    i++;
  }
  if (count === 1) {
    return false;
  }
  if (a.split("").reverse().join("") === b) return true;
  return false;
};
