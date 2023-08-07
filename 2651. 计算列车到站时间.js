/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  const result = arrivalTime + delayedTime;
  if (result < 24) {
    return result;
  } else if (result === 24) {
    return 0;
  }
  return result - 24;
};
