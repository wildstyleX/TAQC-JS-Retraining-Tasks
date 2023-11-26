function filterNumbers(numsArr) {
    return numsArr.filter(num => {
        return (
            num % 3 === 0 ||
            num % 5 === 0 ||
            num % 7 === 0 ||
            num % 11 === 0 ||
            num % 13 === 0
        );
    })
}

const array_numbers = [1, 3, 5, 7, 13, 16, 21, 54, 77, 111, 143, 205];
const resultArray = filterNumbers(array_numbers);
console.log(resultArray);