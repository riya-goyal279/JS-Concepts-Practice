const obj = {
    user: {
        name: "John",
        address: {
            city: "New York",
            zip: "10001",
        }
    },
    cart: {
        fruits: "banana",
        veggies: "spinach"
    },
    interest: "cricket",
};

function convertIntoFlattenedObject(inputObj, flattenedObj, hierarchy) {
    if (typeof(inputObj) != "object") {
        flattenedObj[hierarchy] = inputObj;
        return flattenedObj;
    };
    Object.entries(inputObj).forEach(([key, value]) => {
        const newHierarchy = hierarchy + (hierarchy ? `.${key}` : key);
        convertIntoFlattenedObject(value, flattenedObj, newHierarchy);
    })
    return flattenedObj;
}

function nestedObjectTransformation(inputObj) {
    const flattenedObj = convertIntoFlattenedObject(inputObj, {}, "");
    console.log(flattenedObj);
}

nestedObjectTransformation(obj);
nestedObjectTransformation({});