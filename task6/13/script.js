
const car = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
};

const carForm = document.createElement('form');

Object.entries(car).forEach(([key, value]) => {
    const label = document.createElement('label');
    label.textContent = `${key}: `;
    const input = document.createElement(key === 'in_production' ? 'input' : 'input');
    input.type = key === 'in_production' ? 'checkbox' : typeof value;
    input.value = value;

    label.appendChild(input);
    carForm.appendChild(label);
});

document.body.appendChild(carForm);
