/**
 * @param {number} stackSize
 */
var TripleInOne = function (stackSize) {
  this.arr = new Array(stackSize * 3);
  this.stackSize = stackSize;
  this.indexs = [0, stackSize * 1, stackSize * 2];
};

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function (stackNum, value) {
  if (this.indexs[stackNum] === this.stackSize * (stackNum + 1)) {
    return;
  }
  this.arr[this.indexs[stackNum]] = value;
  this.indexs[stackNum]++;
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function (stackNum) {
  if (this.isEmpty(stackNum)) {
    return -1;
  }
  this.indexs[stackNum]--;
  const value = this.arr[this.indexs[stackNum]];
  return value;
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function (stackNum) {
  if (this.isEmpty(stackNum)) {
    return -1;
  }
  return this.arr[this.indexs[stackNum] - 1];
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function (stackNum) {
  return this.indexs[stackNum] === stackNum * this.stackSize;
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
