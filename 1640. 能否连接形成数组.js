/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const map = new Map();
  for (let i = 0; i < pieces.length; i++) {
    map.set(pieces[i][0], i);
  }

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      return false;
    }
    const index = map.get(arr[i]);
    const len = pieces[index].length;
    for (let j = 0; j < len; j++) {
      if (arr[i + j] !== pieces[index][j]) {
        console.log(20);
        return false;
      }
    }
    i = i + len - 1;
  }
  return true;
};
