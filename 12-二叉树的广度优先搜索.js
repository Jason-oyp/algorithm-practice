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

function f1(rootList,target) {
    if(rootList.length == 0 || rootList == null) return false;
    for (let i = 0; i < rootList.length; i++) {
        if(rootList[i] == null || rootList[i].left == null && rootList[i].right == null){
        }else{
            break;
        }
        return false;
    }
    var childrenList = [];
    for (let i = 0; i < rootList.length; i++) {
        if(rootList[i] !==null && rootList[i].value === target){
            return true;
        }else{
            childrenList.push(rootList[i].left);
            childrenList.push(rootList[i].right);
        }
        
    }
    return f1(childrenList,target);
}

console.log(f1([a],'n'));