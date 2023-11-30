const line = prompt("Введіть рядок з дужками (наприклад, [[](){{{[]()}}}]):");
const bracketsStack = [];
let i = 0;

for (const character of line) {
    if (character === "[" || character === "{" || character === "(") {
        bracketsStack.push(character);
    } else if (character === "]" && bracketsStack.pop() !== "[") {
        console.log(`Помилка на позиції ${i}: непарні квадратні дужки.`);
        break;
    } else if (character === "}" && bracketsStack.pop() !== "{") {
        console.log(`Помилка на позиції ${i}: непарні фігурні дужки.`);
        break;
    } else if (character === ")" && bracketsStack.pop() !== "(") {
        console.log(`Помилка на позиції ${i}: непарні круглі дужки.`);
        break;
    }
    i++;
}

if (bracketsStack.length === 0) {
    console.log("Дужки розставлені правильно.");
} else {
    console.log("Помилка: непарні дужки.");
}
