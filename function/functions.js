function createArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    console.log(result);
}
createArray(3, 15);

function getNumbers(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i - a + 1; j++) {
            result.push(i);
        }
    }
    console.log(result.join(', '));
}
getNumbers(3, 9);
 
function compact(array) {
    return Array.from(new Set(array));
}
const newArray = [5, 3, 4, 5, 6, 7, 3];
const compactedArray = compact(newArray);
console.log(compactedArray);