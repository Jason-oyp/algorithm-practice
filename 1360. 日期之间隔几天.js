/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  return Math.abs(
    (new Date(date2).getTime() - new Date(date1).getTime()) / 86400000
  );
};
