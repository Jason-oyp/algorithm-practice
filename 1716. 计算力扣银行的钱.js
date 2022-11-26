/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  const th = Math.floor(n / 7);
  const left = n % 7;
  return th * 28 + ((th * (th - 1)) / 2) * 7 + ((2 * th + 1 + left) * left) / 2;
};
