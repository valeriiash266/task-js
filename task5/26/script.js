let userInput = prompt("Введіть рядок:");
let words = userInput.split(" ");

const forbiddenWords = ["bad", "words", "here"];

let beepedWords = words.map(word => (forbiddenWords.includes(word) ? "BEEP" : word));
let resultString = beepedWords.join(" ");

console.log(resultString);
