function displayCurrencyTable() {

    const currencies = ["USD", "EUR", "JPY"];
    const exchangeRates = {};

    const currencyTable = [[''].concat(currencies)];
    currencies.forEach((fromCurrency) => {
        const row = [fromCurrency];
        currencies.forEach((toCurrency) => {
            const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
            row.push(rate.toFixed(2));
        });
        currencyTable.push(row);
    });

    console.log(createTableFromArray(currencyTable));
}


displayCurrencyTable();
