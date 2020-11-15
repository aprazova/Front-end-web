let arrayA = [10, 5, 13, 18, 51];
let arrayB = [];

function getEvenNumbers(array) {
    return array.map(element => element * 2);;
}

arrayB = getEvenNumbers(arrayA);
console.log(arrayB);