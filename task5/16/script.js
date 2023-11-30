const multiplyTable = [];

for (let i = 0; i < 5; i++) {
    multiplyTable[i] = [];
    for (let j = 0; j < 5; j++) {
        multiplyTable[i][j] = i * j;
    }
}

const [, ...rest] = multiplyTable;

const resultArray = rest.map(row => row.filter(element => element !== 0));

console.log(resultArray);
