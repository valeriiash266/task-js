fetch('https://open.er-api.com/v6/latest/USD')
    .then((res) => res.json())
    .then((fetchedData) => {

        const currencies = Object.keys(fetchedData.rates);

        let dropdownHTML = '<select>';
        currencies.forEach((currency) => {
            dropdownHTML += `<option value="${currency}">${currency}</option>`;
        });
        dropdownHTML += '</select>';

        document.body.innerHTML = dropdownHTML;
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
