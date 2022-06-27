/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 解法一：效率太低
var findMode = function (root) {
  const map = {};

  function _findMode(root) {
    if (!root) return;
    if (map[root.val]) {
      map[root.val].value++;
    } else {
      map[root.val] = {};
      map[root.val].value = 1;
      map[root.val].num = root.val;
    }
    _findMode(root.left);
    _findMode(root.right);
  }
  _findMode(root);

  let result = [],
    max = 0;
  Object.values(map).forEach((item) => {
    if (max < item.value) {
      max = item.value;
    }
  });
  for (let prop in map) {
    if (map[prop].value === max) {
      result.push(map[prop].num);
    }
  }
  return result;
};

// 解法二：

var findMode = function (root) {
  let curNum = 0,
    curCount = 0,
    maxCount = 0,
    arr = [];
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    update(root.val);
    dfs(root.right);
  }

  function update(val) {
    if (curNum === val) {
      curCount++;
    } else {
      curCount = 1;
      curNum = val;
    }

    if (curCount === maxCount) {
      arr.push(val);
    }
    if (curCount > maxCount) {
      maxCount = curCount;
      arr = [];
      arr.push(val);
    }
  }

  dfs(root);

  return arr;
};
