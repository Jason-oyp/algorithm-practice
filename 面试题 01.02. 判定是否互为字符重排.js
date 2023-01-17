/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  const a = s1
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");
  const b = s2
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join("");
  return a === b;
};
