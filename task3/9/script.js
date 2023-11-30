let userInput = prompt("Введіть рядок з \\n для нового рядка:");
let multiLineString = userInput.split('\\n').join('\n');
console.log(multiLineString);
