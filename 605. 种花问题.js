/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
    ) {
      n--;
      flowerbed[i] = 1;
      if (n === 0) return true;
      i++;
    }
  }
  return n === 0;
};
