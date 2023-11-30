fetch('https://open.er-api.com/v6/latest/USD')
    .then((res) => res.json())
    .then((data) => {
        const inputCurrency = prompt('Enter the input currency');
        const outputCurrency = prompt('Enter the output currency');
        const amount = prompt('Enter the amount in the input currency');

        const rate = data.rates[outputCurrency];
        const result = amount * rate;

        console.log(`Converted amount: ${result} ${outputCurrency}`);
    });
