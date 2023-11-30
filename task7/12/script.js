function sortArrayOfObjects(arr, field, ascending = true) {
    const compareFunction = (a, b) => {
        const aValue = a[field];
        const bValue = b[field];

        if (aValue < bValue) {
            return ascending ? -1 : 1;
        } else if (aValue > bValue) {
            return ascending ? 1 : -1;
        } else {
            return 0;
        }
    };

    return arr.slice().sort(compareFunction);
}


const persons = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 35 },
    { name: "Олексій", age: 73 },
    { name: "Яків", age: 12 }
];

console.log(sortArrayOfObjects(persons, "age"));
console.log(sortArrayOfObjects(persons, "name", false));
