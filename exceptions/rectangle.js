function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || isNaN(width) || typeof height !== 'number' || isNaN(height)) {
        throw new Error('Invalid data provided! Width and height must be numeric.');
    }
    return width * height;
}

try {
    const area = calcRectangleArea(5, '#');
    console.log(`The area of the rectangle is: ${area}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
} finally {
    console.log('Program execution terminated.');
}