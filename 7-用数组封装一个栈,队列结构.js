//栈
function Stack() {
    this.arr = [];
}
Stack.prototype.push = function (value) {
    return this.arr.push(value);
}
Stack.prototype.pop = function () {
    return this.arr.pop();
}

//队列
function Queue() {
    this.arr = [];
}
Queue.prototype.push = function (value) {
    return this.arr.push(value);
}
Queue.prototype.pop = function () {
    return this.arr.shift();
}
