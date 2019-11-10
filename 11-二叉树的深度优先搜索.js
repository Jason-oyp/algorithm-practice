function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
 let a = new Node('a');
 let b = new Node('b');
 let c = new Node('c');
 let d = new Node('d');
 let e = new Node('e');
 let f = new Node('f');
 let g = new Node('g');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function deepSearch (root,target) {
    if(root == null) return false;
    if(root.value === target) return true;
    let left = deepSearch(root.left,target);
    if(left) return true;
    let right = deepSearch(root.right,target);
    return left || right;
}
console.log(deepSearch(a,'a'));