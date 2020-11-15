let arrayA = [10, 5, 13, 18, 51];

function getAllMultiplesOfThreeElements(array) {
    let result = [];
    array.forEach(element => {
        if (element % 3 == 0) {
            result.push(element);
        }
    });
    return result;
}

let multiplesOfThreeElements = getAllMultiplesOfThreeElements(arrayA);
console.log(multiplesOfThreeElements);