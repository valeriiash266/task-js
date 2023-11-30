let userChoice = prompt("Введіть свій вибір (камінь, ножиці, папір):").toLowerCase();
let computerChoice = Math.random() < 0.33 ? "камінь" : Math.random() < 0.66 ? "ножиці" : "папір";

alert(`Комп'ютер обрав: ${computerChoice}`);

let winner =
    userChoice === computerChoice
        ? "Нічия!"
        : (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
            ? "Ви виграли!"
            : "Ви програли!";

alert(winner);
