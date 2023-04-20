/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  let count = 0;
  cost.sort((a, b) => b - a);
  for (let i = 0; i < cost.length; i++) {
    if ((i + 1) % 3 === 0) {
      continue;
    }
    count += cost[i];
  }

  return count;
};
