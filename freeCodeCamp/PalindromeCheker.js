function palindrome(str) {
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
     var reverStr = removeChar.split('').reverse().join('');
    return (removeChar === reverStr);
  }
  
  
  
  console.log(palindrome("eye"));
  console.log(palindrome('2_A3*3#A2'));
  console.log(palindrome('not a palindrome'))