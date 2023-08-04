import * as stringFunctions from "./freecodecamp/string_functions.js";
import * as arrayFunctions from "./kata/array_functions.js";
import * as mathFunctions from "./kata/math_functions.js";

const kata = {
  ...arrayFunctions,
  ...mathFunctions
};
console.log(kata);
console.log(stringFunctions.uppercaseString("Hello world!"));