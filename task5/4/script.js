let array = ["apple", "banana", "cherry"];

let index = prompt("Введіть індекс у масиві:");
if (index >= 0 && index < array.length) {
    let newValue = prompt("Введіть нове значення:");
    array[index] = newValue;
    console.log(array);
} else {
    alert("Невірний індекс");
}
