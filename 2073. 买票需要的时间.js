/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let second = 0,
    i = 0;
  while (true) {
    const ticket = tickets[i];
    if (ticket === 0) {
      i = (i + 1) % tickets.length;
      continue;
    }
    tickets[i]--;
    second++;
    if (tickets[i] === 0 && i === k) {
      return second;
    }
    i = (i + 1) % tickets.length;
  }
};
