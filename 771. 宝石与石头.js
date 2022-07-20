/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (const s of stones) {
    if (jewels.indexOf(s) > -1) {
      count++;
    }
  }
  return count;
};
