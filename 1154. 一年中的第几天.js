/**
 * @param {string} date
 * @return {number}
 */
const map = {
  0: 0,
  1: 31,
  2: 31,
  3: 62,
  4: 92,
  5: 123,
  6: 153,
  7: 184,
  8: 215,
  9: 245,
  10: 276,
  11: 306,
  12: 337,
};
var dayOfYear = function (date) {
  const arr = date.split("-");
  const month = +arr[1];
  const day = +arr[2];
  let result = map[month - 1];

  result += day;
  if (month > 2) {
    const Fday = new Date(arr[0], 2, 0).getDate();
    result += Fday;
  }
  return result;
};
