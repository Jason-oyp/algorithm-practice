function Node (value) {
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
let c2 = new Node('c');
let d2 = new Node('d');
let e2 = new Node('e');
let f2 = new Node('f');
let g2 = new Node('g');
a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = g2;

function compareTree (root1,root2) {
    if(root1 == root2) return true;
    if(root1 == null && root2 != null || root1 != null && root2 == null) return false;
    if(root1.value != root2.value) return false;
    return compareTree(root1.left, root2.left) && compareTree(root1.right,root2.right) || compareTree(root1.left, root2.right) && compareTree(root1.right,root2.left);
}

console.log(compareTree(a1,a2));