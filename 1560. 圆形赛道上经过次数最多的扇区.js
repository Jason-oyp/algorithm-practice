/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  const ret = [];
  const size = rounds.length;
  const start = rounds[0],
    end = rounds[size - 1];
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      ret.push(i);
    }
  } else {
    for (let i = 1; i <= end; i++) {
      ret.push(i);
    }
    for (let i = start; i <= n; i++) {
      ret.push(i);
    }
  }
  return ret;
};
