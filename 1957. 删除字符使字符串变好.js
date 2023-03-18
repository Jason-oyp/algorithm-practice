/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  if (s.length < 3) {
    return s;
  }
  const arr = [s[0], s[1]];
  for (let i = 2; i < s.length; i++) {
    if (s[i] === arr[arr.length - 1] && s[i] === arr[arr.length - 2]) {
      continue;
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join("");
};
