// Remove All Adjacent Duplicates in String II






/* var removeDuplicates = function(s, k) {
    let arr = s.split('');
    for(index=0; index < arr.length; index++) {
        // let index = arr.indexOf(e);
        let flag = 1;
        for(i = index+k-1; i > index; i--){
            if(arr[index]===arr[i]){
                flag++;
            }else{
                break;
            }
        }
       
        let flagF = 1;
        for(i = index-k+1; i < index; i++){
            if (i < 0) {
                break;
            }
            if(arr[index]===arr[i]){
                flagF++;
            }else{
                break;
            }
        }
        if(flag === k){
            arr.splice(index, k);
            --index;
        }
        if(flagF === k){
            let delIndex = index - k + 1;
            arr.splice(delIndex, k);
            index -= k;
        }
    }
    return arr.join('');
};
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    for(const char of s) {
        if(stack.length > 0 && stack[stack.length-1].char === char) {
            stack[stack.length-1].appeared++;
            if(stack[stack.length-1].appeared === k) {
                stack.pop();
            }
        } else {
            stack.push({char, appeared: 1})
        }
    }
    
    let res = '';
    for(const {char, appeared} of stack) {
        res += char.repeat(appeared);
    }
    return res;
};
console.log(removeDuplicates('cdeeedbbcccbada', 3));
let a =1;
let b =3;
let sum = a + b; 
console.log(sum)