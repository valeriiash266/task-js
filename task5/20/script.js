const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";

for (const name of names) {
    str += `<tr><td>${name}</td></tr>`;
}

str += "</table>";

document.write(str);
