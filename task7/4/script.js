function getCredentials() {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const name = prompt("Enter your name:");
    const surname = prompt("Enter your surname:");
    const fatherName = prompt("Enter your father's name:");

    const fullName = `${capitalize(name)} ${capitalize(surname)} ${capitalize(fatherName)}`;

    return { name, surname, fatherName, fullName };
}


console.log(getCredentials());
