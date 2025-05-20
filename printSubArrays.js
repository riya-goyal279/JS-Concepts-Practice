function printSubArrays(arr) {
    for(let i=0; i< arr.length; i++){
        const subArr = []
        for(let j=i; j< arr.length; j++){
            subArr.push(arr[j]);
            console.log(subArr.join(""));
        }
    }
}

printSubArrays([1, 2, 3]);
printSubArrays(["a", "b", "c", "d"])