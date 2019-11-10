const qian = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
const zhong = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(qian, zhong) {
    if (qian.length == 0 || zhong.length == 0 || qian == null || zhong == null || qian.length != zhong.length) return null;
    let root = new Node(qian[0]);
    // console.log(root);
    let rootIndex = zhong.indexOf(qian[0]);
    // console.log(rootIndex);
    let qianLeft = qian.slice(1,rootIndex + 1);
    let qianRight = qian.slice(rootIndex + 1,qian.length);
    let zhongLeft = zhong.slice(0,rootIndex);
    let zhongRight = zhong.slice(rootIndex + 1, zhong.length);
    root.left = f1(qianLeft,zhongLeft);
    root.right = f1(qianRight,zhongRight);
    return root;
}
let root = f1(qian,zhong);
console.log(root.left);
console.log(root.right);
