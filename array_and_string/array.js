const custom_array = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1);
console.log(custom_array);

custom_array.forEach((element, index) => {
    console.log(`[${index + 1}] – ${element}`)
});

const multipleBy7 = custom_array.some(elem => elem % 7 === 0);
console.log(`Array ${multipleBy7 ? 'contain' : 'doesn\'t contain'} a multiple of 7.`);

custom_array.sort((a,b) => b-a);
console.log(custom_array);

custom_array.fill(0, custom_array.length / 2);
console.log(custom_array);

custom_array.splice(0, 3);
console.log(custom_array);

const duplicates = new Set(custom_array).size !== custom_array.length;
console.log(`Array ${duplicates ? 'have' : 'does not have'} duplicates.`);

const halfArray = custom_array.slice(custom_array.length / 2);
console.log(halfArray);

const evenNumbers = custom_array.filter(elem => elem % 2 === 0).length;
console.log(`Array contains even ${evenNumbers} numbers`);