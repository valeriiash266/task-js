
let red = parseInt(prompt("Введіть значення для red:"), 10);
let green = parseInt(prompt("Введіть значення для green:"), 10);
let blue = parseInt(prompt("Введіть значення для blue:"), 10);

let hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
alert(`CSS-колір: ${hexColor}`);
