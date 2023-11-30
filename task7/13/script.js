function createSortableTable(arrayOfObjects, sortBy, sortOrder = "asc") {
    const sortedArray = sortArrayOfObjects(arrayOfObjects, sortBy, sortOrder === "asc");
    return createTableFromArray(sortedArray);
}


const personsData = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 35 },
    { name: "Олексій", age: 73 },
    { name: "Яків", age: 12 }
];

console.log(createSortableTable(personsData, "age", "desc"));
