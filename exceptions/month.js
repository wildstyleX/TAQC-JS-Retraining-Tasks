class MonthException {
    constructor(message) {
        this.name = 'MonthException'
        this.message = message
    }
}

function showMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    if (month >= 1 && month <= 12) {
        return months[month - 1];
    } else {
        throw new MonthException(`Number ${month} in not an actual number of month!`);
    }
}

try {
    const monthNumber = 'month';
    const monthName = showMonthName(monthNumber);
    console.log(`Month you selected is: ${monthName}`)
} catch (err) {
    if (err instanceof MonthException) {
        console.error(`Error: ${err.message}`)
    } else {
        console.error(`Unexpected error: ${err.message}`);
    }
} finally {
    console.log('Program execution terminated.');
}