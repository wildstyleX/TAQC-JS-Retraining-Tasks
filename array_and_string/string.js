const inputString = 'This is a test string';
const spaceCount = inputString.split(' ').length - 1;
console.log(`Number of spaces in this string is: ${spaceCount}`);

function capitalizeFirstChar(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
}
const word = 'advice';
const capitalizeWord = capitalizeFirstChar(word);
console.log(`Capitalized word is: ${capitalizeWord}`);

function countWords(inputString) {
    return inputString.split(' ').filter(function(word) {
        return word.length > 0;
    }).length;
}
const longString = 'This a very long string with a lot of words';
const wordsCount = countWords(longString);
console.log(`Number of words in this string is: ${wordsCount}`);

function createAbbreviation(phrase) {
    let words = phrase.split(' ');
    return words.map(word => word.charAt(0).toUpperCase()).join('');
}
const phrase = 'Solid State Drive';
const abbreviation = createAbbreviation(phrase);
console.log(`Your abbreviation is: ${abbreviation}`);

function checkForPalindrome(inputString) {
    const cleanedString = inputString.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}
const possiblePalindrome = 'Rotor';
const isPalindrome = checkForPalindrome(possiblePalindrome);
console.log(`Provided string ${isPalindrome ? 'is' : 'isn\'t'} a palindrome.`);

function getURLDetailedInfo(url) {
    const urlAddress = new URL(url);
    console.log('Protocol:', urlAddress.protocol.replace(':', ''));
    console.log('Domain:', urlAddress.hostname);
    console.log('Path:', urlAddress.pathname.substring(1));
}
const urlName = 'https://www.otakuninjahero.com/en/swords/metal-swords/';
getURLDetailedInfo(urlName);