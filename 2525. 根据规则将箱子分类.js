/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  const arr = [];
  if (mass >= 100) {
    arr.push("Heavy");
  }
  if (
    length >= 10 ** 4 ||
    width >= 10 ** 4 ||
    height >= 10 ** 4 ||
    length * width * height >= 10 ** 9
  ) {
    arr.push("Bulky");
  }
  if (arr.length === 0) {
    return "Neither";
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return "Both";
};
