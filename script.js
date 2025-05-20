//catching using closures

//function to rotate array
function rotateOnce(arr) {
    const last = arr[arr.length - 1];
    for(let i = arr.length - 1; i > 0 ; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = last;
}

//closure function (hof)
function rotateMemoization(arr2) {
    const cache = {} ;
    
    return function(x) {
        if(cache[x]){
            return cache[x];
        }

        const arr = [...arr2];

        while(x--){
            rotateOnce(arr);
        }
        cache[x] = arr;
        return cache[x];
    }
};

const closure = rotateMemoization([1, 2, 3, 4, 5]);
const rotateByOne = closure(1);
const rotateByTwo = closure(2);

console.log(rotateByOne, rotateByTwo);

const closure2 = rotateMemoization([1, 2, 3, 4, 5, 6, 7]);
const rotate2ByOne = closure2(1);
const rotate2ByTwo = closure2(2);

console.log(rotate2ByOne, rotate2ByTwo);