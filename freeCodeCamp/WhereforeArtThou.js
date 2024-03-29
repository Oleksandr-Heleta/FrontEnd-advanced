function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    const sourceKeys = Object.keys(source);
    arr = collection.filter(obj => {

        for (let i = 0; i < sourceKeys.length; i++) {
            if (
                !obj.hasOwnProperty(sourceKeys[i]) || (obj[sourceKeys[i]] !== source[sourceKeys[i]])
            ) { return false; }

        }
        return true;
    })

    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));