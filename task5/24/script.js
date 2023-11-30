let userInput = prompt("Введіть рядок:");
let words = userInput.split(" ");

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

let resultArray = words.map(word => capitalize(word));
let resultString = resultArray.join(" ");

console.log(resultString);
