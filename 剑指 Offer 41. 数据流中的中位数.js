/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let i = this.arr.length - 1;
  while (i >= 0 && num < this.arr[i]) {
    i--;
  }
  this.arr.splice(i + 1, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.arr.length & 1) {
    return this.arr[(this.arr.length - 1) / 2];
  } else {
    return (
      (this.arr[this.arr.length / 2] + this.arr[this.arr.length / 2 - 1]) / 2
    );
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
