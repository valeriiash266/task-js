let electricityBill = prompt("Введіть суму за електроенергію: ");
let distanceTraveled = prompt("Введіть кількість кілометрів, пройдених за місяць: ");
let costPerKm = 0.1;

let electricityCost = electricityBill * 1.2;
let travelExpense = distanceTraveled * costPerKm;

let totalExpense = electricityCost + travelExpense;

alert(`Загальні витрати: ${totalExpense}`);
