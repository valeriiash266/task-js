const rate = 27.5;

let amountInCurrency = prompt("Введіть суму в валюті:");

let exchangedAmount = amountInCurrency / rate;
alert(`Сума в обміні: ${exchangedAmount.toFixed(2)}`);
