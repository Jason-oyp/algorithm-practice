/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let s = start;
  let e = destination;
  if (start > destination) {
    s = destination;
    e = start;
  }
  let sum1 = 0;
  for (let i = s; i < e; i++) {
    sum1 += distance[i];
  }
  let sum2 = 0;
  for (let i = e; i < distance.length; i++) {
    sum2 += distance[i];
  }

  for (let i = 0; i < s; i++) {
    sum2 += distance[i];
  }

  return Math.min(sum1, sum2);
};
