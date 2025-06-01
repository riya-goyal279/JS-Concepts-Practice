function isMatchingObjects(obj1, obj2) {
    for(key in obj1) {
        if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) return false;
    }
    return true;
}

function getMatchingJson(data, match) {
    const matchedList = [];

    for(let obj of data) {
        if(isMatchingObjects(match, obj))
            matchedList.push(obj);
    }

    return matchedList;
}

const data = [
    {
        name: 'John',
        company: 'Google',
        position: 'Software Engineer',
        level: 'Entry'
    },
    {
        name: 'Ann',
        company: 'Waymo',
        position: 'Product Manager',
        level: 'Entry'
    }
];

const match = {
    position: 'Product Manager',
    level: 'Entry'
}

console.log(getMatchingJson(data, match));