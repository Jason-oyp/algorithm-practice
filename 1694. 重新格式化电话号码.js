/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  number = number.replaceAll(/[- ]/g, "");
  let s = "";
  while (number.length > 4) {
    s += number.slice(0, 3) + "-";
    number = number.slice(3);
  }
  if (number.length === 2 || number.length === 3) {
    s += number;
  }
  if (number.length === 4) {
    s += number.slice(0, 2) + "-" + number.slice(2);
  }
  return s;
};
