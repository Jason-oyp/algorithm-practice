/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const result = [];
  const max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    const num = candies[i] + extraCandies;
    result.push(num >= max ? true : false);
  }
  return result;
};
