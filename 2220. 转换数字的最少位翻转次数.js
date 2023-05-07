/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  start = start.toString(2);
  goal = goal.toString(2);
  let max = 0;
  if (start.length > goal.length) {
    max = start.length;
    goal = "0".repeat(start.length - goal.length) + goal;
  } else {
    max = goal.length;
    start = "0".repeat(goal.length - start.length) + start;
  }
  let count = 0;
  for (let i = 0; i < max; i++) {
    if (start[i] !== goal[i]) {
      count++;
    }
  }
  return count;
};
