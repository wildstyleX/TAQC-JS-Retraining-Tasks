const primeNumbers = numsArr => {
    return numsArr.filter(number => {
        return (
            number % 3 === 0 ||
            number % 5 === 0 ||
            number % 7 === 0 ||
            number % 11 === 0 ||
            number % 13 === 0
        );
    });
};

const array_numbers = [1, 3, 5, 7, 13, 16, 21, 54, 77, 111, 143, 205];
const resultArray = primeNumbers(array_numbers);
console.log(resultArray);