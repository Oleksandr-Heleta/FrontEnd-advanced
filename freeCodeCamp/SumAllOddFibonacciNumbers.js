function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let sum = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            sum += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return sum;
}

console.log(sumFibs(4));