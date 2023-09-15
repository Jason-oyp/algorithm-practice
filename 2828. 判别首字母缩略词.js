/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  return words.reduce((a, b) => a + b[0], "") === s;
};
