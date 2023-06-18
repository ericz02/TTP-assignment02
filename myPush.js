// animals array
let animals = ['pigs', 'goats', 'sheep'];

// myPush function that takes in an array and an element to add to the array
function myPush(arr, elementToAdd){
    arr[arr.length] = elementToAdd;
    return arr.length;
}

const count = myPush(animals, 'cows');

console.log(count);
console.log(animals)