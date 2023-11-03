// var RecentCounter = function() {
//     this.arr = []
// };

// /**
//  * @param {number} t
//  * @return {number}
//  */
// // RecentCounter.prototype.ping = function(t) {
// //     this.arr.push(t)
// //     for (let i = 0; i < this.arr.length; i++) {
// //         if (t - 3000 <= this.arr[i]) {
// //             return this.arr.length - i
// //         }
// //     }
// //     return
// // };

var RecentCounter = function () {
  this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
