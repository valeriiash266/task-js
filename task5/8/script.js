const originalArray = [];

for (let i = 0; i < 5; i++) {
    let userInput = prompt("Введіть елемент для масиву:");
    originalArray.push(userInput);
}

const reversedArray = [];

while (originalArray.length > 0) {
    reversedArray.push(originalArray.pop());
}

console.log(reversedArray);
