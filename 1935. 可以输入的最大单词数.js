/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const result = text.split(" ");
  const b = brokenLetters.split("");
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    let flag = true;
    for (let j = 0; j < b.length; j++) {
      if (result[i].includes(b[j])) {
        flag = false;
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
};
