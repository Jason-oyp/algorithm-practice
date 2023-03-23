/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let count = 0;
  let cur = "a";
  for (let i = 0; i < word.length; i++) {
    let step = Math.abs(word[i].charCodeAt() - cur.charCodeAt());
    if (step > 13) {
      step = 26 - step;
    }
    count += step + 1;
    cur = word[i];
  }
  return count;
};
