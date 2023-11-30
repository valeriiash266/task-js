
fetch('https://open.er-api.com/v6/latest/USD')
    .then((res) => res.json())
    .then((data) => {



        const currencies = Object.keys(data.rates);

        const currencyTable = [[''].concat(currencies)];
        currencies.forEach((fromCurrency) => {
            const row = [fromCurrency];
            currencies.forEach((toCurrency) => {
                const rate = data.rates[toCurrency] / data.rates[fromCurrency];
                row.push(rate.toFixed(2));
            });
            currencyTable.push(row);
        });


        console.table(currencyTable);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
