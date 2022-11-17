/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  if (sequence.indexOf(word) === -1) {
    return 0;
  }
  let i = 1;
  let str = word;
  while (true) {
    str += word;
    if (sequence.indexOf(str) === -1) {
      return i;
    }
    i++;
  }
};
