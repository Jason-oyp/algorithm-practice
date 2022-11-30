/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let obj = time.split("");
  for (let i = 0; i < time.length; i++) {
    if (time[i] === "?") {
      if (i === 0) {
        if (+time[1] >= 4) {
          obj[0] = 1;
        } else {
          obj[0] = 2;
        }
      }
      if (i === 1) {
        if (obj[0] === "0" || obj[0] === "1") {
          obj[1] = 9;
        } else {
          obj[1] = 3;
        }
      }
      if (i === 3) {
        obj[i] = 5;
      }
      if (i === 4) {
        obj[i] = 9;
      }
    }
  }
  return obj.join("");
};
