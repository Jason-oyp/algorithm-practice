/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  var tableHour = {
    "??": 24,
    "?0": 3,
    "?1": 3,
    "?2": 3,
    "?3": 3,
    "?4": 2,
    "?5": 2,
    "?6": 2,
    "?7": 2,
    "?8": 2,
    "?9": 2,
    "0?": 10,
    "1?": 10,
    "2?": 4,
  };

  var tableMin = {
    "??": 60,
    "?0": 6,
    "?1": 6,
    "?2": 6,
    "?3": 6,
    "?4": 6,
    "?5": 6,
    "?6": 6,
    "?7": 6,
    "?8": 6,
    "?9": 6,
    "0?": 10,
    "1?": 10,
    "2?": 10,
    "3?": 10,
    "4?": 10,
    "5?": 10,
  };

  const hour = time.slice(0, 2);
  const min = time.slice(3);
  return (tableHour[hour] ?? 1) * (tableMin[min] ?? 1);
};
