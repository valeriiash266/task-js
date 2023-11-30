const firstNumber = document.getElementById('firstNumber')
const secondNumber = document.getElementById('secondNumber')
const divisionResult = document.getElementById('divisionResult')
const calcResult = () => {
    const firstNumberValue = parseFloat(firstNumber.value);
    const secondNumberValue = parseFloat(secondNumber.value);

    if (!isNaN(firstNumberValue) && !isNaN(secondNumberValue) && secondNumberValue !== 0) {
        divisionResult.innerHTML = `Result: ${firstNumberValue / secondNumberValue}`;
    } else {
        divisionResult.innerHTML = "Invalid input or division by zero!";
    }
};

firstNumber.oninput = secondNumber.oninput = calcResult;