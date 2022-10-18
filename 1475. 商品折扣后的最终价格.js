/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length; i++) {
    let num = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        num = prices[j];
        break;
      }
    }
    result[i] = prices[i] - num;
  }
  return result;
};
