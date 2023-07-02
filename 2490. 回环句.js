/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const arr = sentence.split(" ");
  if (arr.at(0)[0] !== arr.at(-1)[arr.at(-1).length - 1]) return false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][arr[i].length - 1] !== arr[i + 1][0]) {
      return false;
    }
  }
  return true;
};
