/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = {};
  list1.forEach((item, index) => {
    map[item] = {
      count1: 1,
      count: index,
    };
  });
  list2.forEach((item, index) => {
    if (map[item]) {
      map[item].count1 += 1;
      map[item].count += index;
    }
  });

  let result = {
    count: Number.MAX_VALUE,
    result: [],
  };
  //   console.log(map)
  for (const prop in map) {
    if (map[prop].count1 !== 1) {
      if (map[prop].count < result.count) {
        result.count = map[prop].count;
        result.result = [prop];
        continue;
      }
      if (map[prop].count === result.count) {
        result.result.push(prop);
      }
    }
  }
  return result.result;
};

var findRestaurant = function (list1, list2) {
  const index = new Map();
  for (let i = 0; i < list1.length; i++) {
    index.set(list1[i], i);
  }

  const ret = [];
  let indexSum = Number.MAX_VALUE;
  for (let i = 0; i < list2.length; i++) {
    if (index.has(list2[i])) {
      const j = index.get(list2[i]);
      if (i + j < indexSum) {
        ret.length = 0;
        ret.push(list2[i]);
        indexSum = i + j;
      } else if (i + j == indexSum) {
        ret.push(list2[i]);
      }
    }
  }
  return ret;
};


// 解法一：后面的一次 遍历对象没有必要，在循环list2的时候就可以做这些操作