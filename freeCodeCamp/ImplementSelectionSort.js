function selectionSort(array){
    let i,
        j,
        minIndx,
        temp;
    for (i = 0; i < array.length - 1; i++){
        minIndx = i;
        for (j = i + 1; j < array.length; j++){
            if (array[j] < array[minIndx]) minIndx = j;
            temp = array[minIndx];
            array[minIndx] = array[i];
            array[i] = temp;
        }
    }
    return array;
}
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));