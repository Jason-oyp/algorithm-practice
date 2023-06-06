/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map = {};
  const items = items1.concat(items2);
  for (let i = 0; i < items.length; i++) {
    if (map[items[i][0]]) {
      map[items[i][0]] += items[i][1];
    } else {
      map[items[i][0]] = items[i][1];
    }
  }
  return Object.entries(map)
    .map((item) => [+item[0], +item[1]])
    .sort((a, b) => a[0] - b[0]);
};
