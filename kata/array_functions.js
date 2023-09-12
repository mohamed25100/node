export { digitize, maps as doubleArray, removeEveryOther, invert, countPositivesSumNegatives }
const digitize = n => Array.from(String(n), Number).reverse(); //console.log(digitize(35231)); // Output: [1, 3, 2, 5, 3]

const maps = arr => arr.map(number => number * 2); const originalArray = [1, 2, 3]; //const doubledArray = maps(originalArray); console.log(doubledArray); // Output: [2, 4, 6]

const invert = array => array.map(number => -number);//console.log(invert([1, 2, 3, 4, 5]));// Output: [-1, -2, -3, -4, -5]

const countPositivesSumNegatives = array => !array || array.length === 0 ? [] : array.reduce(([positiveCount, negativeSum], number) => number > 0 ? [positiveCount + 1, negativeSum] : number < 0 ? [positiveCount, negativeSum + number] : [positiveCount, negativeSum], [0, 0]); //console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));











const removeEveryOther = arr => arr.filter((_, index) => index % 2 === 0);
//console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"]));;// Output: [ 'Keep', 'Keep', 'Keep', 'Keep' ]