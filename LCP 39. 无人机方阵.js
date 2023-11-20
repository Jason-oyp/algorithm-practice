/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
var minimumSwitchingTimes = function (source, target) {
  let map = {};
  let map1 = {};
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      map[source[i][j]] = (map[source[i][j]] || 0) + 1;
      map1[target[i][j]] = (map1[target[i][j]] || 0) + 1;
    }
  }
  let ans = 0;
  for (let p in map) {
    if (map1[p]) {
      if (map[p] > map1[p]) {
        ans += map[p] - map1[p];
      }
    } else {
      ans += map[p];
    }
  }
  return ans;
};
