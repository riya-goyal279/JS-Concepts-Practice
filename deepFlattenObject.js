function deepFlattenObjectRecursively(obj) {
    if(typeof obj == null || typeof obj !== "object")
        return;

    let resultObj = {};

    for(key in obj){
        const flattenedObj = deepFlattenObjectRecursively(obj[key]);
        if(!flattenedObj) {
            resultObj[key] = obj[key];
        }
        else {
            resultObj = {...resultObj, ...flattenedObj};
        }
    }
    return resultObj;

}

function deepFlattenObjectIteratively(obj) {
    if(typeof obj == null || typeof obj !== "object")
        return {};

    const stack = [obj];
    const flattenedObj = {};

    while(stack.length){
        const topObj = stack.shift();

        for(key in topObj) {
            if(typeof topObj[key] === null || typeof topObj[key] !== 'object'){
                flattenedObj[key] = topObj[key];
            } else {
                stack.push(topObj[key]);
            }
        }
    }

    for(key in obj) {

    }


    return flattenedObj;
}


const input = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    },
    e: {
        f: {
            g: 4,
            h: null,
            i: undefined
        }
    }
};

/*
{
    a: 1,
    c: 2,
    d: 3, 
    g: 4,
    h: null,
    i: undefined,
}
*/

console.log(deepFlattenObjectRecursively(input));
console.log(deepFlattenObjectRecursively({}));
console.log(deepFlattenObjectRecursively(null));
console.log(deepFlattenObjectIteratively(input));
console.log(deepFlattenObjectIteratively({}));
console.log(deepFlattenObjectIteratively(null));