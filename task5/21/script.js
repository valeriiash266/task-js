const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<table>";

for (const currency of currencies) {
    str += "<tr>";
    for (const letter of currency) {
        str += `<td>${letter}</td>`;
    }
    str += "</tr>";
}

str += "</table>";

document.write(str);
