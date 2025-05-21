function printSubsets(arr) {

    //total number of sets
    const numberOfSubsets = 2 ** arr.length;

    for(let i= 0; i < numberOfSubsets; i++) {
        let curr = i;
        let subSet = "";

        for(let j=arr.length - 1; j >= 0; j--){
            //using the concept of binary
            subSet += curr % 2 ? arr[j] : "-"
            curr = Math.floor(curr / 2);
        }
        subSet = subSet.split("").reverse().join("");
        console.log(subSet);
    }
}

printSubsets([1, 2, 3]);