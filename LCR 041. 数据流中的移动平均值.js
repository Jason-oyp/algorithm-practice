/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.queue = [];
    this.size = size;
    this.sum = 0;
};

MovingAverage.prototype.next = function (val) {
    if (this.queue.length === this.size) {
        this.sum -= this.queue.shift();
    }
    this.queue.push(val);
    this.sum += val;
    return this.sum / this.queue.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */