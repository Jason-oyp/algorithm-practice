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


 function qian(root){
    if(root == null) return;
    console.log(root.value);
    qian(root.left);
    qian(root.right);
 }
//  qian(a);
 a
 b
 d
 e
 c
 f
 g

 function zhong(root){
    if(root == null) return;
    zhong(root.left);
    console.log(root.value);
    zhong(root.right);
 }
//  zhong(a);
 d
 b
 e
 a
 f
 c
 g
 
 function hou(root){
    if(root == null) return;
   
    hou(root.left);
    hou(root.right);
    console.log(root.value);
 }
 hou(a);
 d
 e
 b
 f
 g
 c
 a
