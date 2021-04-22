function myReplace(str, before, after) {
    let arr = str.split(' ');
    let i = arr.indexOf(before);
    
        if(before[0] === before[0].toUpperCase()){
          after = after[0].toUpperCase() + after.slice(1);
        } else{
          after = after[0].toLowerCase() + after.slice(1);
        }
        arr.splice(i, 1, after)
        
    return arr.join(' ');
  }
  
 console.log( myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
 console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
 console.log(myReplace("I think we should look up there", "up", "Down"));