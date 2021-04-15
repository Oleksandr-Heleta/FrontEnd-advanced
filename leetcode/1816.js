//  Truncate Sentence


var truncateSentence = function(s, k) {
    let arr = s.split(' ').slice(0, k);
    let newS = arr.join(' ');
    return newS;
};

console.log(truncateSentence("Hello how are you Contestant", 4));
console.log(truncateSentence("What is the solution to this problem", 4));