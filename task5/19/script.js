const names = ["John", "Paul", "George", "Ringo"];
let str = "<table><tr>";

for (const name of names) {
    str += `<td>${name}</td>`;
}

str += "</tr></table>";

document.write(str);
