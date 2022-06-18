/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const gLength = g.length,
    sLength = s.length;
  let count = 0;
  for (let i = 0, j = 0; i < gLength && j < sLength; i++, j++) {
    while (j < sLength && g[i] > s[j]) {
      j++;
    }
    if (j < sLength) {
      count++;
    }
  }

  return count;
};
