
function bubbleSort(array){
    let i,
        j, 
        temp;
    for (i = 0; i < array.length -1; i++){
        for (j = 0; j < array.length-i-1; j++){
            if (array[j] > array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))