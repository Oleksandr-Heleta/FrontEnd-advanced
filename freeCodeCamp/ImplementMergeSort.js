function mergeSort(array) {
	var chunkSize = array.length / 2;
	if(chunkSize >= 1){
		var left = mergeSort(array.slice(0, chunkSize));
		var right = mergeSort(array.slice(chunkSize));
		
		var result = [];
		while(left.length && right.length){
			if(left[0] < right[0]){
				result.push(left.shift());
			} else{
				result.push(right.shift());
			}
		}
		return result.concat(left, right);
	}
	return array;
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));