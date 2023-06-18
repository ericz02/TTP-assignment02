// initailize an object with key value pairs
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

// grabKey function takes an object as an argument and returns an array of the values from the object
function grabKeys(obj) {

    // initialize an empty array
    let arr = []

    // for loop that iterates through the object and pushes the values into the array
    for (key in obj) {
        arr.push(obj[key])
    }

    // return the array of values from the object
    return arr;
}

console.log(grabKeys(object1))
//output
//[ 'somestring', 42, false ]