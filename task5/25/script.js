let userInput = prompt("Введіть рядок:");
let words = userInput.split(" ");

const forbiddenWords = ["bad", "words", "here"];

let filteredWords = words.filter(word => !forbiddenWords.includes(word));
let resultString = filteredWords.join(" ");

console.log(resultString);
