/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let z = 0,
    o = 0,
    len = s.length;
  for (let p of s) {
    if (p === "0") {
      z++;
    } else {
      o++;
    }
  }
  if (len === 1) {
    return "1";
  }
  return "1".repeat(o - 1) + "0".repeat(z) + "1";
};
