/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.ptr = 1;
  this.arr = [];
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.arr[idKey] = value;
  const result = [];
  while (this.ptr in this.arr) {
    result.push(this.arr[this.ptr++]);
  }
  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
