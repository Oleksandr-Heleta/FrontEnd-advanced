function convertToRoman(num) {
    var latArr = [];
    var difNum = num;
    function check(difNum){
      if (difNum >= 1000) {
        difNum -=1000;
        latArr.push('M');
        return check(difNum);
      } else if(difNum >= 900){
        difNum -=900;
        latArr.push('CM');
        return check(difNum);
      }else if(difNum >= 500){
        difNum -=500;
        latArr.push('D');
        return check(difNum);
      } else if(difNum >= 400){
        difNum -=400;
        latArr.push('CD');
        return check(difNum);
      }else if(difNum >= 100){
        difNum -=100;
        latArr.push('C');
        return check(difNum);
      }else if(difNum >= 90){
        difNum -=90;
        latArr.push('XC');
        return check(difNum);
      }else if(difNum >= 50){
        difNum -=50;
        latArr.push('L');
        return check(difNum);
      }else if(difNum >= 40){
        difNum -=40;
        latArr.push('XL');
        return check(difNum);
      }else if(difNum >= 10){
        difNum -=10;
        latArr.push('X');
        return check(difNum);
      }else if(difNum >= 9){
        difNum -=9;
        latArr.push('IX');
        return check(difNum);
      }else if(difNum >= 5){
        difNum -=5;
        latArr.push('V');
        return check(difNum);
      }else if(difNum >= 4){
        difNum -=4;
        latArr.push('IV');
        return check(difNum);
      }else if(difNum >= 1){
        difNum -=1;
        latArr.push('I');
        return check(difNum);
      };
      return;
    };
    check(difNum);
    
    return latArr.join('');
   };

   /* var convertToRoman = function(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
    var romanized = "";
  
    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
  
    return romanized;
  };
   */
   
   console.log(convertToRoman(36));
   console.log(convertToRoman(3));
   console.log(convertToRoman(146));