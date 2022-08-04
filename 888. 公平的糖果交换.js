/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aSum = aliceSizes.reduce((a, b) => a + b);
  const bSum = bobSizes.reduce((a, b) => a + b);
  const sub = Math.abs(aSum, bSum) / 2;
  if (aSum > bSum) {
    for (let i = 0; i < aliceSizes.length; i++) {
      if (bobSizes.includes(aliceSizes[i] - sub)) {
        return [aliceSizes[i], aliceSizes[i] - sub];
      }
    }
  }
  if (aSum < bSum) {
    for (let i = 0; i < aliceSizes.length; i++) {
      if (bobSizes.includes(aliceSizes[i] + sub)) {
        return [aliceSizes[i], aliceSizes[i] + sub];
      }
    }
  }
};

// 这个方法性能不高
