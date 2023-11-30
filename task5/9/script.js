const reversedArray = [];

while (reversedArray.length < 5) {
    let userInput = prompt("Введіть елемент для масиву:");
    reversedArray.unshift(userInput);
}

console.log(reversedArray);
