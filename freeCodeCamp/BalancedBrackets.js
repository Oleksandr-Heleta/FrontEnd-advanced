function isBalanced(str) {
    let brackets = [];
    for (let i = 0; i < str.length; i++) {     
        if (str[i] === "[") {
            brackets.push(str[i]);
        } else if (str[i] === "]") {
            if (brackets[brackets.length - 1] === "[") brackets.pop();
            else return false;
        }
    }
    return true;
}

console.log(isBalanced("]][[[][][][]]["));
console.log(isBalanced("[][[[[][][[[]]]]]]"));