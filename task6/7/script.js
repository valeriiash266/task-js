let obj = {
    name: 'Ivan',
    surname: 'Petrov',
    children: [{ name: 'Maria' }, { name: 'Nikolay' }],
};

const { children: [{ name: name1 }, { name: name2 }] } = obj;

console.log(name1, name2);
