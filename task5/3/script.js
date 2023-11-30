let array = ["apple", "banana", "cherry"];

let index = prompt("Введіть індекс у масиві:");
if (index >= 0 && index < array.length) {
    alert(`Значення за індексом ${index}: ${array[index]}`);
} else {
    alert("Невірний індекс або 'length'");
}
