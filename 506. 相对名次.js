/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const desc = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  const arr2 = new Array(score.length).fill(0).map(() => new Array(2).fill(-1));
  for (let i = 0; i < score.length; i++) {
    arr2[i][0] = score[i];
    arr2[i][1] = i;
  }
  arr2.sort((a, b) => b[0] - a[0]);
  const arr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (i <= 2) {
      arr[arr2[i][1]] = desc[i];
    } else {
      arr[arr2[i][1]] = String(i + 1);
    }
  }
  return arr;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
