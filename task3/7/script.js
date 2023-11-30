let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tagIndex = str.indexOf('<');
let result = str.slice(0, tagIndex) + str.slice(str.indexOf('>') + 1);
console.log(result);
