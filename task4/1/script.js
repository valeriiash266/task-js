let userInput = prompt("Введіть число:");
let number = +userInput;

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert("Число парне");
    } else {
        alert("Число непарне");
    }
} else {
    alert("Введене значення не є числом");
}
