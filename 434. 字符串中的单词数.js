/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s
    .replaceAll(/\s+/g, " ")
    .split(" ")
    .filter((item) => item).length;
};
