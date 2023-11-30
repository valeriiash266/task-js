const multiplyTable = [];

for (let i = 0; i < 5; i++) {
    multiplyTable[i] = [];
    for (let j = 0; j < 5; j++) {
        multiplyTable[i][j] = i * j;
    }
}

const slicedTable = multiplyTable.map(row => row.slice(1));

console.log(slicedTable);
