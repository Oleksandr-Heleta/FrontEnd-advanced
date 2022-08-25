function steamrollArray(arr) {
    let sumArr = [];
    function checkArr(subArr) {
        for (let i = 0; i < subArr.length; i++) {
            if (Array.isArray(subArr[i])) {
                checkArr(subArr[i])
            } else {
                sumArr.push(subArr[i])
            }
        }
    };
    checkArr(arr);
    return sumArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));