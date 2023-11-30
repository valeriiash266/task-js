let userInput = prompt("Введіть рядок з кількома словами:");
let wordToFind = prompt("Введіть слово для пошуку:");

let words = userInput.split(" ");
let index = words.indexOf(wordToFind);

if (index !== -1) {
    alert(`Слово '${wordToFind}' знаходиться на позиції ${index + 1} у рядку.`);
} else {
    alert(`Слово '${wordToFind}' не знайдено у рядку.`);
}
