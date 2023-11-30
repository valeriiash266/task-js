let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

const [even1, even2, , , , odd1, odd2, odd3, ...letters] = arr;

console.log(even1, even2);
console.log(odd1, odd2, odd3);
console.log(letters);
