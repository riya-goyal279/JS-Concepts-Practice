function deepFlattenArrayRecursion(arr) {
    let resultArr = [];
    if(!Array.isArray(arr)){
        resultArr.push(arr);
        return resultArr;
    }
    for(let index in arr){
        const flattenedArray = deepFlattenArrayRecursion(arr[index]);
        resultArr.push(...flattenedArray);
    }
    return resultArr;
}

function deepFlattenArrayIteration(arr) {
    const resultArr = [];
    const stack = [...arr];

    while(stack.length) {
        const current = stack.shift();
        if(Array.isArray(current)) {
            stack.unshift(...current);
        } else {
            resultArr.push(current);
        }
    }

    return resultArr;
}

const arr = [[1, 2, undefined], [[[[3, null, 4]]]], [5, [6], [7]]];
/*
[1, 2, undefined, 3, null, 4, 5, 6, 7]
*/

console.log(deepFlattenArrayRecursion(arr));
console.log(deepFlattenArrayIteration(arr));

