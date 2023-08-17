/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  let i = 1,
    cur = 1;
  const set = new Set([1]);
  while (true) {
    const now = (k * i + cur) % n || n;
    if (set.has(now)) {
      const result = new Set();
      for (let j = 1; j <= n; j++) {
        if (!set.has(j)) {
          result.add(j);
        }
      }
      return [...result];
    } else {
      set.add(now);
      i++;
      cur = now;
    }
  }
};
