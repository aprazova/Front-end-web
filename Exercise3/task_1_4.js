let arrayA = [10, 5, 13, 18, 51];

function hasSmallerThanTenElement(array) {
    for (let element of array) {
        if (element < 10) {
            return true;
        }
    }
    return false;
}

hasSmallerThanTenElement(arrayA);