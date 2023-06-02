/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (new Set(suits).size === 1) return "Flush";
  const setSize = new Set(ranks).size;
  if (setSize === 5) return "High Card";
  if (setSize === 4) return "Pair";
  const map = {};
  for (let i = 0; i < 5; i++) {
    if (map[ranks[i]]) {
      map[ranks[i]]++;
    } else {
      map[ranks[i]] = 1;
    }
  }
  const num = Math.max(...Object.values(map));
  if (num >= 3) return "Three of a Kind";
  if (num === 2) return "Pair";
};
