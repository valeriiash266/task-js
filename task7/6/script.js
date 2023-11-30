function promptWithDefault(promptText, defaultValue) {
    const userInput = prompt(promptText);
    return userInput === null ? defaultValue : userInput;
}


const userInput = promptWithDefault("Enter something:", "Default Value");
console.log(userInput);
