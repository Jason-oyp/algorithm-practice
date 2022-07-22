/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let line = 1,
    width = 0;
  for (let i = 0; i < s.length; i++) {
    const num = widths[s[i].charCodeAt() - 97];
    if (width + num > 100) {
      line++;
      width = num;
    } else if (width + num === 100) {
      if (i === s.length - 1) {
        return [line, 100];
      }
      width = 0;
      line++;
    } else {
      width += num;
    }
  }
  return [line, width];
};


// 官方给出的解法，其实小于等于100的情况可以是一种
var numberOfLines = function (widths, s) {
  let line = 1,
    width = 0;
  for (let i = 0; i < s.length; i++) {
    const num = widths[s[i].charCodeAt() - 97];
    width += num;
    if (width > 100) {
      line++;
      width = num;
    }
  }
  return [line, width];
};
