// Diff Two Arrays

function diffArray(arr1, arr2) {
    const newArr = [];
    function arrInArr(arr1, arr2){
        arr1.forEach(e => {
            if(!arr2.includes(e)){
                newArr.push(e);
            }
        })
    }
    arrInArr(arr1, arr2);      
    arrInArr(arr2, arr1);
    return newArr;
  }

 /*  function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  } */

  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
