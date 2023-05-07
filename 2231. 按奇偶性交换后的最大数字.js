/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  num = String(num);
  const odd = [];
  const even = [];
  const type = [];
  for (let i = 0; i < num.length; i++) {
    if (+num[i] & 1) {
      odd.push(+num[i]);
      type[i] = 1;
    } else {
      even.push(+num[i]);
      type[i] = 0;
    }
  }
  odd.sort().reverse();
  even.sort().reverse();
  let result = "";
  for (let i = 0; i < type.length; i++) {
    if (type[i]) {
      result += odd.shift();
    } else {
      result += even.shift();
    }
  }
  return result;
};
