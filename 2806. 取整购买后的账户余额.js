/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  return 100 - Math.floor((purchaseAmount + 5) / 10) * 10;

  if (purchaseAmount < 5) {
    return 100;
  }
  if (purchaseAmount <= 10) {
    return 90;
  }
  if (purchaseAmount === 100) return 0;
  const [left, right] = String(purchaseAmount).split("");
  if (+right >= 5) {
    return 100 - (+left + 1) * 10;
  } else {
    return 100 - +left * 10;
  }
};
