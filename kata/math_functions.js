export { evenOrOdd, multiply, positiveSum,makeNegative, sumMul };
export { evenOrOddTest, multiplyTest, positiveSumTest, makeNegativeTest, sumMulTest };

const evenOrOdd = n => n % 2 ? "Odd" : "Even";
/*Example usage */ const evenOrOddTest = evenOrOdd(7);

const multiply = (a, b) => a * b;
/*Example usage */ const multiplyTest = multiply(3,5);

const positiveSum = numbers => numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
/*Example usage */ const positiveSumTest = positiveSum([1, -4, 7, 12]); // Output: 20

const makeNegative = number => number > 0 ? -number : number;
/*Example usage */ const makeNegativeTest = makeNegative(1);// -1

const sumMul = (n, m) => (n <= 0 || m <= 0) ? "INVALID" : Array.from({ length: Math.floor((m - 1) / n) }, (_, i) => (i + 1) * n).reduce((acc, val) => acc + val, 0);
/*Example usage */ const sumMulTest = sumMul(2, 9);   // Output: 20