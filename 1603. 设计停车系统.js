/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

const emuns = {
  1: "big",
  2: "medium",
  3: "small",
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this[emuns[carType]] === 0) {
    return false;
  } else {
    this[emuns[carType]]--;
    return true;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
