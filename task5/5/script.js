const multiplyTable = [];

for (let i = 0; i < 5; i++) {
    multiplyTable[i] = [];
    for (let j = 0; j < 5; j++) {
        multiplyTable[i][j] = i * j;
    }
}

console.log(multiplyTable);
