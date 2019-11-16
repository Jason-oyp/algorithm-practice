function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
let a1 = new Node('a');
let b1 = new Node('b');
let c1 = new Node('c');
let d1 = new Node('d');
let e1 = new Node('e');
let f1 = new Node('f');
let g1 = new Node('g');
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.left = f1;
c1.right = g1;

let a2 = new Node('a');
let b2 = new Node('b');
let c2 = new Node('x');
let d2 = new Node('d');
let e2 = new Node('e');
let f2 = new Node('f');
let g2 = new Node('g1');
a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = g2;

function diffTree(root1, root2, diffList) {
    if (root1 == root2) return diffList;
    if (root1 == null && root2 != null) {
        diffList.push({ type: '新增', origin: root1, now: root2 });
    } else if (root1 != null && root2 == null) {
        diffList.push({ type: '删除', origin: root1, now: root2 });
    } else if (root1.value != root2.value) {
        diffList.push({ type: '修改', origin: root1, now: root2 });
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    } else {
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    }
}

let diffList = [];
diffTree(a1, a2, diffList);
console.log(diffList);