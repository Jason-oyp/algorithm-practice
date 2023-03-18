/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let result = s
    .split("")
    .map((it) => it.charCodeAt() - 96)
    .join("");
  while (k--) {
    result = result.split("").reduce((a, b) => +a + +b, 0) + "";
  }
  return +result;
};
