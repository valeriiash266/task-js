const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";

str += currencies.reduce((acc, currency) => acc + `<option>${currency}</option>`, "");

str += "</select>";

document.write(str);
