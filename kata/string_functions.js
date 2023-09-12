export { evenOrOdd, solution as reverseString, boolToWord, numberToString, removeChar as removeFirstAndLastChars, repeatStr as repeatString, noSpace as removeSpaces, abbrevName as nameToInitials, greet, findNeedle, helloWorld, booleanToString, areYouPlayingBanjo, fakeBin, bmi, grow }
const evenOrOdd = n => n % 2 ? "Odd" : "Even"; //console.log(evenOrOdd(7)); // Output: 'Odd'

const solution = str => str.split('').reverse().join('');// console.log(solution('world'));; // Output: 'dlrow'

const boolToWord = bool => bool ? "Yes" : "No";// console.log(boolToWord(true));;  // Output: "Yes"

const numberToString = num => num.toString(); //console.log(numberToString(123));   // Output: "123"

const removeChar = inputString => inputString.slice(1, -1);  //console.log(removeChar("hello"));    // Output: "ell"

const repeatStr = (n, s) => s.repeat(n); //console.log(repeatStr(3, "*")); //  Output: "***"

const noSpace = inputString => inputString.replace(/\s+/g, ''); //console.log(noSpace("8aaaaa dddd r     ")); // Output: "8aaaaaddddr"

const abbrevName = name => name.split(' ').map(word => word[0].toUpperCase()).join('.'); //console.log(a"bbrevName("Sam Harris"));   // Output: "S.H"

const greet = name => "Hello," +name + " how are you doing today?"; //console.log(greet("Alice")); // Output: "Hello, Alice how are you doing today?"

const findNeedle = haystack => `found the needle at position ${haystack.indexOf("needle")}`; //const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];console.log(findNeedle(haystack)); // Output: "found the needle at position 5"
/*const greet = () => "hello world!";*/
const helloWorld = () => "hello world!"; //console.log(helloWorld()); // Output: "hello world!"

const booleanToString = b => b.toString(); //console.log(booleanToString(true));  // Output: "true"

const areYouPlayingBanjo = name => `${name} ${name[0].toLowerCase() === 'r' ? 'plays' : 'does not play'} banjo`;//console.log(areYouPlayingBanjo("Robert")); // Output: "Robert plays banjo"

const fakeBin = (inputString) => inputString.replace(/\d/g, (digit) => (digit < '5' ? '0' : '1'));

const bmi = (weight, height) => ( (bmi => bmi <= 18.5 ? "Underweight" : bmi <= 25.0 ? "Normal" : bmi <= 30.0 ? "Overweight" : "Obese" )(weight / (height * height)) );

const grow = (arr) => arr.reduce((acc, currentValue) => acc * currentValue, 1);