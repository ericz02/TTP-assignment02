// store a bunch of pets in an array
let pets = ['cat', 'dog', 'bird', 'fish', 'turtle', 'snake', 'hamster']

// function mySome that takes in an array and a callback function
function mySome(arr, cb) {
    // for each element in the array, if the callback function returns true, return true
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return true;
        }
    }
    // otherwise return false
    return false;
}

// then print the result if item length is greater than 5
console.log(mySome(pets, item => item.length > 5));