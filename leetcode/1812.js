// Determine Color of a Chessboard Square

const squareIsWhite = (coordinates) => {
    return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
}


/* var squareIsWhite = function(coordinates) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'; 
    const letter = alpha.indexOf(coordinates[0]);
    const num = parseInt(coordinates[1]); 
    let color = null;
    
    if(letter % 2 === 0){ 
        num % 2 === 0 ? color = true : color = false;
    } else {
        num % 2 === 0 ? color = false : color = true;
    }
    
    return color;
}; */

/* var squareIsWhite = function(coordinates) {
    const whiteArr = ['a2', 'a4', 'a6', 'a8',
                      'b1', 'b3', 'b5', 'b7',
                      'c2', 'c4', 'c6', 'c8',
                      'd1', 'd3', 'd5', 'd7',
                      'e2', 'e4', 'e6', 'e8',
                      'f1', 'f3', 'f5', 'f7',
                      'g2', 'g4', 'g6', 'g8',
                      'h1', 'h3', 'h5', 'h7'
                     ];
    if(whiteArr.indexOf(coordinates) >= 0){
        return true;
    } ;
    return false;
}; */

console.log(squareIsWhite('a1'));
console.log(squareIsWhite('b1'));
