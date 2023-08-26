/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);
  const result = money - prices[1] - prices[0];
  if (result >= 0) {
    return result;
  }
  return money;
};
