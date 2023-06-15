// store a bunch of pets in an array
let pets = ['cat', 'dog', 'bird', 'fish', 'turtle', 'snake', 'hamster']

// myFilter takes in an array and a callback function
function myFilter(arr, cb) {

    // create a new array to store the filtered values
    let newPets = [];
    
    // iterate over each element in arr and updates the new array with the updated value
    for (let i = 0; i < pets.length; i++) {
        // if callback function returns true, push the element into the new array
        if (cb(arr[i])) {
            newPets.push(arr[i])
        }
    }

    // return the new array
    return newPets;
}

// print the new array with the filtered value that is less than 3 characters
console.log(myFilter(pets, item => item.length > 3));
