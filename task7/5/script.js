function addNewLines(inputString) {
    return inputString.replace(/\\n/g, '\n');
}


const stringWithNewLines = "Hello\\nWorld!";
console.log(addNewLines(stringWithNewLines));
