/**
 * @param {string[]} demand
 * @return {number}
 */
var minNumBooths = function (demand) {
  const total = {};
  for (let i = 0; i < demand.length; i++) {
    const map = {};
    for (let s of demand[i]) {
      map[s] = (map[s] || 0) + 1;
    }
    for (let p in map) {
      total[p] = Math.max(total[p] || 0, map[p]);
    }
  }
  return Object.values(total).reduce((a, b) => a + b);
};
