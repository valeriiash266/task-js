function createTableFromArray(array) {
    let tableHTML = "<table>";

    array.forEach((row) => {
        tableHTML += "<tr>";
        row.forEach((cell) => {
            tableHTML += `<td>${cell}</td>`;
        });
        tableHTML += "</tr>";
    });

    tableHTML += "</table>";
    return tableHTML;
}

const sampleArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(createTableFromArray(sampleArray));
