function insertionSort(array){
    let i,
        j,
        key;
    for (i = 0; i < array.length; i++){
        key = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > key){
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));