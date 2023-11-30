const persons = [
    {
        name: 'Марія',
        fatherName: 'Іванівна',
        surname: 'Іванова',
        sex: 'female',
    },
    {
        name: 'Миколай',
        fatherName: 'Іванович',
        surname: 'Іванов',
        age: 15,
    },
    {
        name: 'Петро',
        fatherName: 'Іванович',
        surname: 'Іванов',
        married: true,
    },
];

const columns = Array.from(
    new Set(persons.flatMap((person) => Object.keys(person)))
);

const tableHeader = `<tr>${columns.map((col) => `<th>${col}</th>`).join('')}</tr>`;

const tableBody = persons
    .map(
        (person) =>
            `<tr>${columns.map((col) => `<td>${person[col] || ''}</td>`).join('')}</tr>`
    )
    .join('');

const tableHTML = `<table>${tableHeader}${tableBody}</table>`;

document.body.innerHTML = tableHTML;
