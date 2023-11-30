let firstName = prompt("Введіть ваше ім'я:");
let lastName = prompt("Введіть ваше прізвище:");
let middleName = prompt("Введіть ваше по-батькові:");

let fullName = `${firstName.trim()} ${lastName.trim()} ${middleName.trim()}`;
fullName = fullName.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
console.log(fullName);
