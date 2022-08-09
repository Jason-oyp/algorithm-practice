var rangeSumBST = function (root, low, high) {
  let result = 0;

  function dfs(root, low, high) {
    if (root === null) return;
    dfs(root.left, low, high);
    if (root.val >= low && root.val <= high) {
      result += root.val;
    } else {
      if (root.val > high) {
        return;
      }
    }
    dfs(root.right, low, high);
  }
  dfs(root, low, high);
  return result;
};
