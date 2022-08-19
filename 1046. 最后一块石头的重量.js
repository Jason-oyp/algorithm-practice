/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones = stones.sort((a, b) => b - a);
  while (stones.length >= 2) {
    const one = stones[0];
    const two = stones[1];
    const sub = Math.abs(one - two);
    if (sub === 0) {
      stones = stones.slice(2);
    } else {
      stones = [sub, ...stones.slice(2)].sort((a, b) => b - a);
    }
  }
  if (stones.length === 1) return stones[0];
  return 0;
};
