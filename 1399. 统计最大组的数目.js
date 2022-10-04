/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const s = [];
  for (let i = 1; i <= n; i++) {
    const sum = String(i)
      .split("")
      .reduce((prev, next) => {
        return +prev + +next;
      });
    s.push(+sum);
  }
  const map = {};
  for (const p of s) {
    if (map[p]) {
      map[p]++;
    } else {
      map[p] = 1;
    }
  }
  const result = Object.values(map);
  const map1 = {};
  for (const p of result) {
    if (map1[p]) {
      map1[p]++;
    } else {
      map1[p] = 1;
    }
  }
  const result1 = Object.keys(map1);
  return map1[Math.max(...result1)];
};
