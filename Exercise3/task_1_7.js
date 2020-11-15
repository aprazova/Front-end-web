let arrayA = [10, 5, 13, 18, 51];

function getLastTwoElements(array) {
    return array.length > 1 ? array.slice(array.length - 2) : array;
}

let result = getLastTwoElements(arrayA);
console.log(result);