export { isDivisible, lovefunc as areTheyInLove, betterThanAverage }
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0; //console.log(isDivisible(3, 1, 3)); // Output: true

const lovefunc = (petals1, petals2) => (petals1 % 2 !== 0) !== (petals2 % 2 !== 0);// console.log(lovefunc(3, 4));  // Output: true

const betterThanAverage = (classPoints, yourPoints) => [...classPoints, yourPoints].reduce((acc, score) => acc + score, 0) / (classPoints.length + 1) < yourPoints; //console.log(betterThanAverage([70, 65, 80, 90], 85)); // Output: true
