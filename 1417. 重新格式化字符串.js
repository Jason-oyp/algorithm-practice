/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let num = [];
  let letter = [];
  for (const p of s) {
    if (p.charCodeAt() >= 97 && p.charCodeAt() <= 122) {
      letter.push(p);
    } else {
      num.push(p);
    }
  }
  if (
    Math.abs(num.length - letter.length) !== 1 &&
    num.length !== letter.length
  ) {
    return "";
  }
  let result = "";
  if (num.length > letter.length) {
    const temp = num;
    num = letter;
    letter = temp;
  }
  let j = 0,
    k = 0;
  for (let i = 0; i < num.length + letter.length; i++) {
    if (i & 1) {
      result += num[j++];
    } else {
      result += letter[k++];
    }
  }
  return result;
};
