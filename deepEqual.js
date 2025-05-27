function deepEquals(valueOne, valueTwo) {
    //Step 1: Verify NaN values
    if(Number.isNaN(valueOne) && Number.isNaN(valueTwo)) {
        return true;
    }
    if(Number.isNaN(valueOne) || Number.isNaN(valueTwo)) {
        return false;
    }

    //Step 2: Verify null values
    if(valueOne === null || valueTwo === null) {
        return valueOne === valueTwo;
    }

    //Step 3: Verify Primitives
    if(typeof valueOne !== "object" || typeof valueTwo !== "object")
        return valueOne === valueTwo;

    //Step 4: Verify Arrays
    if(Array.isArray(valueOne) && Array.isArray(valueTwo)){
        if(valueOne.length !== valueTwo.length) 
            return false;

        for(let i = 0; i < valueOne.length; i++) {
            if(!deepEquals(valueOne[i], valueTwo[i]))
                return false;
        }
        return true;
    }
    if(Array.isArray(valueOne) || Array.isArray(valueTwo)){
        return false;
    }

    //Step 5: Verify Objects
    const valueOneKeys = Object.keys(valueOne);
    const valueTwoKeys = Object.keys(valueTwo);

    if(valueOneKeys.length !== valueTwoKeys.length)
        return false;

    for(let key in valueOne){
        const valueOneVal = valueOne[key];
        const valueTwoVal = valueTwo[key];

        if(!deepEquals(valueOneVal, valueTwoVal))
            return false;
    }

    return true;
}

console.log(deepEquals(NaN,NaN));
console.log(deepEquals(NaN,null));
console.log(deepEquals(NaN,1));
console.log(deepEquals(null,null));
console.log(deepEquals(1,"string"));
console.log(deepEquals(1,1));
console.log(deepEquals(1,["one", "two"]));
console.log(deepEquals(["apple", "banana"],["orange", "banana"]));
console.log(deepEquals(["apple", "banana"],["apple", "banana"]));
console.log(deepEquals({firstName: "Riya", lastName: "Goyal"}, {}));
console.log(deepEquals({firstName: "Riya", lastName: "Goyal"}, {firstName: "Riya"}));
console.log(deepEquals({firstName: "Riya", lastName: "Goyal"}, {firstName: "Riya", lastName: "Goyal"}));