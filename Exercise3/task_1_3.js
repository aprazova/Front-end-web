let arrayA = [10, 5, 13, 18, 51];

function filterArray(array) {
    return array.filter(element => element % 2 == 0);
}

let filteredArray = filterArray(arrayA);
console.log(filterArray);