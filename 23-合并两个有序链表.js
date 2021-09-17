var mergeTwoLists = function (l1, l2) {
    const result = []
    const oneLen = l1.length
    const twoLen = l2.length
    let ll = oneLen > twoLen ? l1 : l2
    let ls = null
    if (ll === l1) {
        ls = l2
    } else {
        ls = l1
    }
    console.log(ll.length, 'length')
    while (ll.length) {
        if (ll[0] < ls[0]) {
            result.push(ll[0])
            ll.shift()
        } else if (ll[0] === ls[0]) {
            result.push(ll[0], ls[0])
            ll.shift()
            ls.shift()
        } else {
            if (ls[0] === undefined) {
                result.push(ll[0])
                ll.shift()
            } else {
                result.push(ls[0])
                ls.shift()
            }

        }
    }
    if (ls.length) {
        result.push(...ls)
    }
    return result
};
console.log(mergeTwoLists([1, 2, 3, 4, 5, 56], [3, 4, 6, 7, 8, 123, 345, 345, 675]))

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function (l1, l2) {

    const l3 = new ListNode(-1)
    const c3 = l3

    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            c3.next = l1
            l1 = l1.next
        } else {
            c3.next = l2
            l2 = l2.next
        }
        c3 = c3.next
    }
    c3.next = l1 === null ? l2 : l1
    return l3.next
};

