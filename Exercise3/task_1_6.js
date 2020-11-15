let array = [10, 5, 13, 18, 51];

const reducer = (sum, currentValue) => sum + currentValue;

function reduceArray(array) {
    return array.reduce(reducer);
}

let result = reduceArray(array);
console.log(result);