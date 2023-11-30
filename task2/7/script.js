
let floors = prompt("Введіть кількість поверхів:");
let flatsPerFloor = prompt("Введіть кількість квартир на поверсі:");
let flatNumber = prompt("Введіть номер квартири:");


let entrance = Math.ceil(flatNumber / (floors * flatsPerFloor));
let floor = Math.ceil((flatNumber % (floors * flatsPerFloor)) / flatsPerFloor);


alert(`Під'їзд: ${entrance}, Поверх: ${floor}`);
