const pets = ["Cat", "Dog", "Rabbit"];

function myEach(arr, CB) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + CB());
    }
}

function callbackFunc() {
    return "s";
}

// myEach(pets, callbackFunc)

myEach(pets, (s) => "s");
