/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  let fl = first.length;
  let sl = second.length;
  if (Math.abs(fl - sl) > 1) {
    return false;
  }
  let i = 0;
  let j = 0;
  let isFind = false;
  while (i < fl && j < sl) {
    if (first[i] !== second[j]) {
      // 找到了一个不一样的
      if (isFind) {
        return false;
      }
      isFind = true;
      if (fl > sl) {
        i++;
      } else if (fl < sl) {
        j++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return true;
};
