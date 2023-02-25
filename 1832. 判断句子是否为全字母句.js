/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const exist = new Array(26).fill(0);
  for (let i = 0; i < sentence.length; i++) {
    const c = sentence[i];
    exist[c.charCodeAt() - "a".charCodeAt()] = true;
  }
  for (const x of exist) {
    if (!x) {
      return false;
    }
  }
  return true;
};
