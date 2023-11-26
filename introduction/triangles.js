const triangleArea = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        console.log('You have provided incorrect data for triangle sides!');
        return;
    }
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return Math.round(area * 1000) / 1000;
};

const a = 7, b = 8, c = 9;
const result = triangleArea(a, b, c);

console.log(`The area of the triangle is: ${result}`);