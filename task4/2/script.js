let userText = prompt("Введіть текст:");
let forbiddenWords = ["bad", "evil", "dangerous"];

for (let word of forbiddenWords) {
    if (userText.includes(word)) {
        alert(`Текст містить заборонене слово: ${word}`);
        break;
    }
}
