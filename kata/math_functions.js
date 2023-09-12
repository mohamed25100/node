export {multiply, positiveSum,makeNegative, opposite, squareSum, summation, SmallestIntegerFinder, countSheeps, basicOp as basicMathOperation, litres, century as centuryFromYear, stringToNumber, past as timeSinceMidnightInMilliseconds, paperwork, findAverage,  sum, simpleMultiplication, sumMul };
const multiply = (a, b) => a * b; //console.log(multiply(3,5)); // Output: 15

const positiveSum = numbers => numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0); //console.log(positiveSum([1, -4, 7, 12]));; // Output: 20

const makeNegative = number => number > 0 ? -number : number; // console.log(makeNegative(1));;// -1

const opposite = number => -number; //console.log(opposite(12)); // Output: -12

const squareSum = numbers => numbers.reduce((sum, num) => sum + num * num, 0); //console.log(squareSum([1, 2, 2])); // Output: 9

const summation = num => (num * (num + 1)) / 2; //console.log(summation(5)); // Output: 15

class SmallestIntegerFinder {findSmallestInt = args => Math.min(...args);} //const finder = new SmallestIntegerFinder();const numbers = [5, 2, 8, 1, 9];const smallest = finder.findSmallestInt(numbers);console.log(smallest); // This will output: 1

const countSheeps = arr => arr.filter(Boolean).length; //const sheepArray = [ true,  true,  true,  false, true,  true,  true,  true, true,  false, true,  false, true,  false, false, true, true,  true,  true,  true, false, false, true,  true ]; //console.log(countSheeps(sheepArray)); // Output: 17

const basicOp = (operation, value1, value2) => ({ '+': value1 + value2, '-': value1 - value2, '*': value1 * value2, '/': value1 / value2 })[operation]; //console.log(basicOp('+', 4, 7));   // Output: 11

const litres = time => Math.floor(time * 0.5); //console.log(litres(6.7));  // Output: 3

const century = year => Math.ceil(year / 100); //console.log(century(1705)); // Output: 18

const stringToNumber = str => +str; //console.log(stringToNumber("1234")); // Output: 1234 //Using unary plus operator `+`:

const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;//console.log(past(0, 1, 1)); // Output: 61000

const paperwork = (n, m) => (n < 0 || m < 0) ? 0 : n * m;//console.log(paperwork(5, 5)); // Output: 25

const findAverage = array => array.reduce((acc, num) => acc + num, 0) / (array.length || 1);

const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);

const simpleMultiplication = number => number * (number % 2 === 0 ? 8 : 9);/* 2023/08/21 */





const sumMul = (n, m) => (n <= 0 || m <= 0) ? "INVALID" : Array.from({ length: Math.floor((m - 1) / n) }, (_, i) => (i + 1) * n).reduce((acc, val) => acc + val, 0);
//console.log(sumMul(2, 9)); // Output: 20