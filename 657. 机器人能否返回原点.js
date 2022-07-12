/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const enums = {
    U: {
      index: 0,
      val: 1,
    },
    D: {
      index: 1,
      val: -1,
    },
    L: {
      index: 2,
      val: 1,
    },
    R: {
      index: 3,
      val: -1,
    },
  };
  const arr = [0, 0, 0, 0];
  for (let move of moves) {
    arr[enums[move].index] += enums[move].val;
  }
  return arr[0] + arr[1] === 0 && arr[3] + arr[2] === 0;
};

var judgeCircle = function (moves) {
  let x = 0,
    y = 0;
  const length = moves.length;
  for (let i = 0; i < length; i++) {
    const move = moves[i];
    if (move == "U") {
      y--;
    } else if (move == "D") {
      y++;
    } else if (move == "L") {
      x--;
    } else if (move == "R") {
      x++;
    }
  }
  return x == 0 && y == 0;
};

judgeCircle("LDRRLRUULR");
