var FrontMiddleBackQueue = function () {
  this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.arr.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  // this.arr.
  if (this.arr.length === 0) {
    this.arr.push(val);
  } else if (this.arr.length === 1) {
    this.arr.unshift(val);
  } else {
    // if (this.arr.length & 1) {
    this.arr.splice(Math.floor(this.arr.length / 2), 0, val);
    // }
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.arr.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  const res = this.arr.shift();
  return res === undefined ? -1 : res;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.arr.length === 0) {
    return -1;
  } else if (this.arr.length === 1) {
    return this.arr.pop();
  } else {
    if (this.arr.length & 1) {
      return this.arr.splice(Math.floor(this.arr.length / 2), 1);
    } else {
      return this.arr.splice(Math.floor(this.arr.length / 2) - 1, 1);
    }
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  const res = this.arr.pop();
  return res === undefined ? -1 : res;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
