/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  let total = 0;
  while (true) {
    if (mainTank < 5) {
      return total + mainTank * 10;
    } else {
      mainTank -= 5;
      total += 50;
      if (additionalTank > 0) {
        additionalTank--;
        mainTank++;
      }
    }
  }
};
