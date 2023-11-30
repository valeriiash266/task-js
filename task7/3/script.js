function getEntranceAndFloor(flatNumber, flatsPerFloor, floorsPerEntrance) {
    const totalFlats = flatsPerFloor * floorsPerEntrance;
    const entrance = Math.ceil(flatNumber / totalFlats);
    const floor = Math.ceil((flatNumber % totalFlats) / flatsPerFloor);

    return { entrance, floor };
}


console.log(getEntranceAndFloor(25, 4, 5));
