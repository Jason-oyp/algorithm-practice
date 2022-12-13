/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const enums = {
    type: 0,
    color: 1,
    name: 2,
  };
  const value = enums[ruleKey];
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][value] === ruleValue) {
      count++;
    }
  }
  return count;
};
