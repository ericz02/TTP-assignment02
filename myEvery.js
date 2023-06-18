// function myEvery that takes an array and a callback as arguments
function myEvery(arr, cb){
    // initialize a counter variable
    let counter = 0

    // for each element in the array, if the callback function returns true, increment the counter
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            counter++
        }
    }

    // if the counter is equal to the length of the array, return true
    if(counter == arr.length){
        return true;
    } else {
        return false;
    }
}

// store numbers in an array
let array = [1, 30, 31, 29, 10, 13];

// print the result of myEvery if the number is less than 40
console.log(myEvery(array, a => a < 40))