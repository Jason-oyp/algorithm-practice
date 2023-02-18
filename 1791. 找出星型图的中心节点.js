/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  // const arr = new Array(edges.length + 2).fill(0)
  // for (let i = 0; i < edges.length; i++) {
  //     arr[edges[i][0]] += 1
  //     arr[edges[i][1]] += 1
  // }
  // return arr.indexOf(Math.max(...arr))
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
    ? edges[0][0]
    : edges[0][1];
};
