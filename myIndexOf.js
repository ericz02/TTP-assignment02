const pets = ['cat', 'dog', 'bird', 'fish', 'turtle', 'snake', 'hamster']

function myIndexOf(arr,target){
    for(let i = 0; i < arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(pets, "snake"));