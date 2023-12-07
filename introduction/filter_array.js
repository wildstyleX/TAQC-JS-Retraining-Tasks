const filterMostOftenNumber = numsArr => {
    let numCount = {};
    numsArr.forEach(number => {
        numCount[number] = (numCount[number] || 0) + 1;
    });

    let mostOftenNumber = null;
    let maxOccurrences = 0;

    for (let number in numCount) {
        if (numCount[number] > maxOccurrences) {
            mostOftenNumber = Number(number);
            maxOccurrences = numCount[number];
        }
    }

    let newArrayWithMostOftenNumber = Array(maxOccurrences).fill(mostOftenNumber);
    console.log(`Array filled with most occurred number: ${newArrayWithMostOftenNumber}`);

    return numsArr.filter(number => number !== mostOftenNumber);
};

const numsArr = [1, 2, 1, 3, 2, 5, 7, 5, 3, 7, 5];
const result = filterMostOftenNumber(numsArr);

console.log(result);