var RecentCounter = function () {
  this.arr = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.arr.push(t);
  const min = t - 3000;
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i] >= min) {
      return this.arr.length - i;
    }
  }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
