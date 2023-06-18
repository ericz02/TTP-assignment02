// initialize an object with key value pairs
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
}

// grabKey function takes an object as an argument
function grabKeys(obj) {
    // initialize an empty array
    let arr = []
    
    // for loop that iterates through the object and pushes the keys into the array
    for (key in obj) {
        arr.push(key)
    }

    // return the array of keys from the object
    return arr;
}

// print the result of grabKeys
console.log(grabKeys(object1))

//output
//[ 'a', 'b', 'c' ]