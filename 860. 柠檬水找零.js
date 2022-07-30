/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let count = {
    5: 0,
    10: 0,
  };
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      count[5] += 1;
    } else if (bills[i] === 10) {
      count[10] += 1;
      if (count[5]) {
        count[5]--;
      } else {
        return false;
      }
    } else {
      if (count[5] && count[10]) {
        count[5]--;
        count[10]--;
      } else if (count[5] >= 3) {
        count[5] -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
