/*
Problem Statement:
You are given an alphanumeric string S and an integer K. 
First, construct a new string by appending S K-1 times to itself, 
forming a repeated sequence appearing K times.

Now, perform the following operations repeatedly until only one character remains:
1. Remove every alternate character, starting from the first character.
2. Remove every alternate character, starting from the last character.
*/

function convertString(str, isForward) {
    if(str.length == 1 || str.length == 0) return str;
    if(str.length == 2) return str[0];

    let newStr = "";

    if(isForward) 
        for(let i=1; i < str.length; i+=2)
            newStr += str[i];
    else
        for(let i= str.length - 2; i >= 0; i-=2)
            newStr += str[i];

    return convertString(newStr, !isForward);
}

function lastOneStanding(str) {
    return function(k) {
        let kTimesStr = "";
        while(k--){
            kTimesStr+=str;
        }

        return convertString(kTimesStr, true);
    }
}

const func1 = lastOneStanding("abcd");
console.log(func1(3));
console.log(func1(4));

const func2 = lastOneStanding("abc");
console.log(func2(3));
console.log(func2(4));