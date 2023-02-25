/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  word = word
    .replaceAll(/[a-z]/g, " ")
    .split(/\s+/)
    .filter((it) => it)
    .map((it) => BigInt(it));
  return [...new Set(word)].length;
};
