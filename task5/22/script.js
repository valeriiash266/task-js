const multiplyTable = [];

for (let i = 0; i < 5; i++) {
    multiplyTable[i] = [];
    for (let j = 0; j < 5; j++) {
        multiplyTable[i][j] = i * j;
    }
}

let str = "<table>";

for (const row of multiplyTable) {
    str += "<tr>";
    for (const cell of row) {
        str += `<td>${cell}</td>`;
    }
    str += "</tr>";
}

str += "</table>";

document.write(str);
