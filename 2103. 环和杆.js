/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  if (rings.lenght / 2 < 3) {
    return 0;
  }
  const map = {};
  for (let i = 0; i < rings.length; i += 2) {
    if (map[rings[i + 1]]) {
      map[rings[i + 1]].add(rings[i]);
    } else {
      map[rings[i + 1]] = new Set(rings[i]);
    }
  }
  let count = 0;
  Object.values(map).forEach((it) => {
    if (it.size === 3) {
      count++;
    }
  });
  return count;
};
