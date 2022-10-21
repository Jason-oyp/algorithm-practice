/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const min = Math.min(...salary);
  const max = Math.max(...salary);
  return (
    (salary.reduce((prev, next) => {
      return prev + next;
    }, 0) -
      min -
      max) /
    (salary.length - 2)
  );
};
