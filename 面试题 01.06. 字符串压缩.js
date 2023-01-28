/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let result = "";
  if (S.length === 0) {
    return "";
  }
  let t = S[0],
    count = 1;
  for (let i = 1; i < S.length; i++) {
    if (S[i] === t) {
      count++;
    } else {
      result += t + count;
      t = S[i];
      count = 1;
    }
  }
  if (t) {
    result += t + count;
  }
  return result.length >= S.length ? S : result;
};
