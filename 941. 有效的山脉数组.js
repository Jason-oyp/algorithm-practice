/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let up = false,
    down = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return false;
    } else if (arr[i] < arr[i - 1]) {
      if (!up) {
        return false;
      } else {
        down = true;
      }
    } else {
      if (down) {
        return false;
      } else {
        up = true;
      }
    }
  }
  return up && down;
};
