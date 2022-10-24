/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const arr = date.split(" ");
  const month = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  let result = "";
  result += arr[2] + "-";
  result += month[arr[1]] + "-";

  const day = arr[0].match(/\d+(?=(st|th|rd|nd))/g)[0];
  result += day.length === 1 ? "0" + day : day;
  return result;
};
