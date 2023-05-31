/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  return Math.max(
    amount[0],
    amount[1],
    amount[2],
    Math.floor((amount[0] + amount[1] + amount[2] + 1) / 2)
  );
};
