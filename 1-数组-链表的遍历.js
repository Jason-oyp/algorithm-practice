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

function bianLink(root) {
    console.log(root.value);
    if (root.next == null) return;
    bianLink(root.next);
}
bianLink(node1);

function bianArr(arr, i) {
    if (arr == null || arr.length <= i) return;
    console.log(arr[i]);
    bianArr(arr, i + 1);
}
bianArr([1, 2, 3, 4, 5],0);