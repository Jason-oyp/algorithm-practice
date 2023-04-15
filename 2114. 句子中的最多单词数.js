/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map((it) => it.split(" ").length));
};
