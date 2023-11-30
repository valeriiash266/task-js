let str = "якийсь текст у якому є один тег <br /> і всяке інше";
let tagIndex = str.indexOf('<');
let result = str.slice(0, tagIndex) + str.slice(tagIndex, str.indexOf('>') + 1).toUpperCase() + str.slice(str.indexOf('>') + 1);
console.log(result);
