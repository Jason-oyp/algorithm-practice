/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.map((it) => it.reduce((prev, next) => prev + next))
  );
};
