/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  // return new Promise((resolve) => {
  //     Promise.all([promise1, promise2]).then((data) => {
  //         resolve(data.reduce((a, b) => a + b))
  //     })
  // })
  return (await promise1) + (await promise2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
