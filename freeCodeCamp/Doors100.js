/* function getFinalOpenedDoors(numDoors) {
    const doors = {};
    const openDoors = [];
    for (let i = 1; i <= numDoors; i +=1){
        doors[i] = 0;
    }
    for (let j = 1; j <= numDoors; j +=1){
        for(let door in doors){
            if(door % j === 0){
                switch(doors[door]) {
                    case 0:  
                        doors[door] = 1;
                        break;
                  
                    case 1:  
                        doors[door] = 0;
                        break;
                }
            }
        }
    }
    for(let door in doors){
        if(doors[door] === 1) openDoors.push(door);
    }
    return openDoors;
}; */

function getFinalOpenedDoors(numDoors) {
    const openDoors = [];
    for (let i = 1; i <= numDoors; i +=1){
        if(Number.isInteger(Math.sqrt(i))) openDoors.push(i);
    }
    return openDoors;
}
console.log(getFinalOpenedDoors(100));
