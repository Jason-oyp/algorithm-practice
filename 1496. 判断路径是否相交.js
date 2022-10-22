/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const result = [0, 0];
  const paths = [[0, 0]];
  for (const s of path) {
    if (s === "N") {
      result[1] += 1;
    } else if (s === "S") {
      result[1] -= 1;
    } else if (s === "W") {
      result[0] -= 1;
    } else if (s === "E") {
      result[0] += 1;
    }
    if (
      paths.some((it) => {
        return it[0] === result[0] && it[1] === result[1];
      })
    ) {
      return true;
    } else {
      paths.push([result[0], result[1]]);
    }
  }
  return false;
};
