const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";

for (const currency of currencies) {
    str += `<option>${currency}</option>`;
}

str += "</select>";

document.write(str);
