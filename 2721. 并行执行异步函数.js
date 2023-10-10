/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const arr = new Array(functions.length).fill(0);
    let count = 0;
    for (let i = 0; i < functions.length; i++) {
      functions[i]().then((data) => {
        arr[i] = data;
        if (count === functions.length - 1) {
          resolve(arr);
        } else {
          count++;
        }
      }, reject);
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
