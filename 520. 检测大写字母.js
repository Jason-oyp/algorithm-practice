/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.toLowerCase() === word || word.toUpperCase(word)) return true;
  const left = word.slice(0, 1);
  const right = word.slice(1);
  if (right.toLowerCase() === right && left.toUpperCase() === left) return true;
  return false;
};
