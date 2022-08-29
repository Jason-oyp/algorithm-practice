/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const map = {};
  for (const prop of chars) {
    if (map[prop]) {
      map[prop]++;
    } else {
      map[prop] = 1;
    }
  }
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    const copy = JSON.parse(JSON.stringify(map));
    let flag = true;
    for (let j = 0; j < words[i].length; j++) {
      if (copy[words[i][j]]) {
        copy[words[i][j]]--;
        continue;
      }
      flag = false;
      break;
    }
    if (flag) result += words[i].length;
  }
  return result;
};
