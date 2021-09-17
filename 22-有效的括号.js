const map = {
    '(': ')',
    '[': ']',
    '{': '}',
    ')': '(',
    ']': '[',
    '}': '{'
}
const arr = ['(','[','{']
var isValid = function(s) {
    const stack = []
    if (!arr.includes(s[0])) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === stack[stack.length -1]) {
            stack.pop()
        } else {
            if (arr.includes(s[i])) {
                stack.push(s[i])
            } else return false
        }
    }
    return stack.length ? false : true
};

console.log(isValid("(])"))