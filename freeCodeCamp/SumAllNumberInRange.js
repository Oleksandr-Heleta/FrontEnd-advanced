function sumAll(arr) {
    let sum = 0;
    let min;
    let max;
    function add(min, max){
      return sum = sum + min + max;
    }
    if (arr[0] > arr[1]){
      min = arr[1];
      max = arr[0];
    } else {
        min = arr[0];
        max = arr[1];
    }
    while (max > min) {
      add(min, max);
      min +=1;
      max -=1;
    }
    if (min === max){
        sum +=min;
    }
    return sum;
  }


 /*  function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  } */

  /* const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  }; */
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([11, 5]))