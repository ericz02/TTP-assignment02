let array = [1, 2, 3, 4, 5];

function myMap(arr, cb) {
    
    // creates new array MapArr to be stored
    let MapArr = [];

    // iterate over each element in arr and updates the new array with the updated value
    for (let i = 0; i < arr.length; i++) {

        MapArr.push(cb(arr[i]))
        
    }

    return MapArr
    
}

const map = myMap(array, a => a * 2)
console.log(map)