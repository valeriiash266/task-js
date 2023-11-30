const cat = {};
const dog = {};
const car = {};


cat[prompt('Enter a property name for cat')] = prompt('Enter a value for cat property');
dog[prompt('Enter a property name for dog')] = prompt('Enter a value for dog property');
car[prompt('Enter a property name for car')] = prompt('Enter a value for car property');

const copiedCar = { ...car };
