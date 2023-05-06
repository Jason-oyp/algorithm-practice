/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  if (current === correct) {
    return 0;
  }
  let h = correct.slice(0, 2) - current.slice(0, 2);
  let m = 0;
  if (current.slice(3) < correct.slice(3)) {
    m = Number(correct.slice(3)) - Number(current.slice(3));
  } else if (current.slice(3) > correct.slice(3)) {
    m = 60 - Number(current.slice(3)) + Number(correct.slice(3));
    h--;
  }
  let count = 0;
  count += h;
  count += Math.floor(m / 15);
  count += Math.floor((m % 15) / 5);
  count += (m % 15) % 5;
  return count;
};
