const originalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const deepCopiedArray = JSON.parse(JSON.stringify(originalArray));

console.log(deepCopiedArray);
