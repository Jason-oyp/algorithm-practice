/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations = citations.sort((a, b) => a - b);
  let h = citations.length;
  while (h) {
    let ans = 0;
    for (let i = citations.length - 1; i >= 0; i--) {
      if (citations[i] >= h) {
        ans++;
      }
    }
    if (h <= ans) {
      return h;
    }
    h--;
  }
  return 0;
};
