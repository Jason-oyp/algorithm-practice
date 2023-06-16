/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  return names
    .map((it, index) => [it, heights[index]])
    .sort((a, b) => b[1] - a[1])
    .map((it) => it[0]);
};
