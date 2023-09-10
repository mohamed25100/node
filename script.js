import { log } from "console";
import * as stringFunctionsFreecodecamp from "./freecodecamp/string_functions.js";
/* start import from kata */
import * as arrayFunctions from "./kata/array_functions.js";
import * as boolFunctions from "./kata/bool_functions.js";
import * as mathFunctions from "./kata/math_functions.js";
import * as stringFunctions from "./kata/string_functions.js";
/* end import from kata  */
const kata = {
  ...arrayFunctions,
  ...boolFunctions,
  ...mathFunctions,
  ...stringFunctions
};
//const finder = new kata.SmallestIntegerFinder();const numbers = [5, 2, 8, 1, 9];console.log(finder.findSmallestInt(numbers));// This will output: 1
//console.log(kata);
//console.log(stringFunctionsFreecodecamp.uppercaseString(kata.helloWorld()) +'\n'); // HELLO WORLD!

console.log(kata.simpleMultiplication(7));