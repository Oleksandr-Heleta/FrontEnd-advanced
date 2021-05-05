function rot13(str) {
    let simbolArr = str.split('');
    let uniArr = [];
    let cryptArr = [];
    simbolArr.forEach(element => {
        let simbol = element.charCodeAt();
        if (simbol >= 65 && simbol <= 90) {
          simbol += 13;
          if (simbol > 90) {simbol -= 26};
        } 
        uniArr.push(simbol);
    });
    uniArr.forEach(element => {
        let letter = String.fromCharCode(element);
        cryptArr.push(letter);
      });
    return  cryptArr.join('');
};
    
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));