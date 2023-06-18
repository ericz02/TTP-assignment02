// animals array
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// myUnshift function that takes in an array and an element to add to the array
function myUnshift(arr, target){

    // for loop that starts at the end of the array and goes backwards
    for(i = arr.length; i > 0; i--){
        // if the current element is equal to the target
        if(arr[i] == target){
            // return the index of the target
            return i;
        }
    }
    // otherwise return -1
    return -1;
}

// print the result of myUnshift
console.log(myUnshift(animals, 'Dodo'));