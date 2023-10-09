/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const datas = [];

  for (let item of arr1) {
    datas[item.id] = item;
  }
  for (let item of arr2) {
    if (datas[item.id]) Object.assign(datas[item.id], item);
    else datas[item.id] = item;
  }

  // 手筛
  // const ans = [];
  // for (let i = 0; i < datas.length; i++) if (datas[i]) ans.push(datas[i]);
  // return ans;

  // 函数筛
  return datas.filter((i) => i);
};
