/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  function compare(s1, s2, type) {
    let result;
    const e11 = +s1.slice(0, 2);
    const e12 = +s1.slice(3);
    const e21 = +s2.slice(0, 2);
    const e22 = +s2.slice(3);
    if (e11 === e21) {
      if (e12 < e22) {
        result = type === "max" ? s2 : s1;
      } else {
        result = type === "max" ? s1 : s2;
      }
    } else {
      if (type === "max") {
        result = e11 > e21 ? s1 : s2;
      } else {
        result = e11 > e21 ? s2 : s1;
      }
    }
    return result;
  }
  const max = compare(event1[0], event2[0], "max");
  const min = compare(event1[1], event2[1], "min");
  return max > min ? false : true;
};

var haveConflict = function (event1, event2) {
  return !(event1[1] < event2[0] || event2[1] < event1[0]);
};
