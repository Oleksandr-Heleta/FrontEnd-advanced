// Make a Person


const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullNameArr = firstAndLast.split(' ');
    this.getFullName = function() {
      return fullNameArr.join(' ');
    };
    this.getFirstName = function() {
      return fullNameArr[0];
    };
    this.getLastName = function() {
      return fullNameArr[1];
    };
    this.setFirstName = function(first) {
      return fullNameArr[0] = first;
    };
    this.setLastName = function(last) {
      return fullNameArr[1] = last;
    };
    this.setFullName = function(firstAndLast) {
      return fullNameArr = firstAndLast.split(' ');
    }
  
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  console.log(bob.getLastName());
  bob.setFirstName("Haskell");
  console.log(bob.getFirstName());
  bob.setLastName("Curry");
  console.log(bob.getFullName());
  bob.setFullName("Bob Ross");
  console.log(bob.getFullName());
