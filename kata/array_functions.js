export { removeEveryOther};
export { removeEveryOtherOriginalTest};

const removeEveryOther = arr => arr.filter((_, index) => index % 2 === 0);
/*Example usage */ const removeEveryOtherOriginalTest = removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"]);// Output: [ 'Keep', 'Keep', 'Keep', 'Keep' ]