const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const calcResult = document.getElementById('calcResult')

const calculateResults = () => {
    const input1Value = parseFloat(input1.value);
    const input2Value = parseFloat(input2.value);

    if (!isNaN(input1Value) && !isNaN(input2Value)) {
        const result = input1Value * input2Value;
        calcResult.innerHTML = `Result: ${result}`;
    } else {
        calcResult.innerHTML = "Invalid input!";
    }
};

input1.oninput = input2.oninput = calculateResults;