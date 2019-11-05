function Node(value) {
    this.value = value;
    this.next = null;
}

let node1 = new Node('node1');
let node2 = new Node('node2');
let node3 = new Node('node3');
let node4 = new Node('node4');
let node5 = new Node('node5');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function niZhi(root) {
    if(root.next == null){ //只有一个链表的情况
        return root;
    }
    if (root.next.next == null) {
        var temp = root.next;   //只有两个节点的情况
        root.next.next = root;
        root.next = null;
        return temp;
    } else {
        var result = niZhi(root.next);
        root.next.next = root;
        root.next = null;
    }
    return result;
}
var newRoot = niZhi(node5);

function bianLink (root){    //链表的遍历
    if(root == null) return;
    console.log(root.value);
    bianLink(root.next);
}
bianLink(newRoot);