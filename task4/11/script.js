let firstName = prompt("Введіть ім'я:") || "Іван";
let lastName = prompt("Введіть прізвище:") || "Іванов";
let middleName = prompt("Введіть по-батькові:") || "Іванович";

let fullName = `${firstName} ${lastName} ${middleName}`;
alert(`Ваше повне ім'я: ${fullName}`);
