let firstName = prompt("Введіть ім'я:");
let lastName = prompt("Введіть прізвище:");
let middleName = prompt("Введіть по-батькові:");

if (!firstName) {
    firstName = "Іван";
}

if (!lastName) {
    lastName = "Іванов";
}

if (!middleName) {
    middleName = "Іванович";
}

let fullName = `${firstName} ${lastName} ${middleName}`;
alert(`Ваше повне ім'я: ${fullName}`);
