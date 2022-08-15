function destroyer(arr) {
    let removeArr = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !removeArr.includes(val);
    });
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));