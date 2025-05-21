

function binarySearch (arr) {
    return function (key) {
        let start = 0, end = arr.length -1;

        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            if(arr[mid] ==  key) return mid;
            if(arr[mid] > key) end = mid-1;
            else start = mid + 1;
        }

        return -1;
    }
}

const binaryFunction = binarySearch([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(binaryFunction(0));
console.log(binaryFunction(9));
console.log(binaryFunction(5));