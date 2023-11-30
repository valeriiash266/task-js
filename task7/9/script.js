function filterOutLexics(inputString, forbiddenWords) {
    const regex = new RegExp(forbiddenWords.join('|'), 'gi');
    return inputString.replace(regex, '');
}


const textWithLexics = "This is a bad example text.";
const forbiddenWords = ["bad", "example"];
console.log(filterOutLexics(textWithLexics, forbiddenWords));
