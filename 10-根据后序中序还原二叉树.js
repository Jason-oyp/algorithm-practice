const hou = ['d', 'e', 'b', 'f', 'g', 'c', 'a'];
const zhong = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(hou, zhong) {
    if (hou.length == 0 || zhong.length == 0 || hou == null || zhong == null || hou.length != zhong.length) return null;
    let root = new Node(hou[hou.length - 1]);
    // console.log(root);
    let rootIndex = zhong.indexOf(root.value);
    // console.log(rootIndex);
    let houLeft = hou.slice(0,rootIndex);
    let houRight = hou.slice(rootIndex,hou.length - 1);
    let zhongLeft = zhong.slice(0,rootIndex);
    let zhongRight = zhong.slice(rootIndex + 1, zhong.length);
    root.left = f1(houLeft,zhongLeft);
    root.right = f1(houRight,zhongRight);
    return root;
}
let root = f1(hou,zhong);
console.log(root.left);
console.log(root.right);
