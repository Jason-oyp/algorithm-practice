/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const n = candyType.length / 2;
  const onlyArr = [...new Set(candyType)];
  return n >= onlyArr.length ? onlyArr.length : n;
};

var distributeCandies = function (candyType) {
  const set = new Set(candyType);
  return Math.min(set.size, candyType.length / 2);
};
