
const keyToDelete = prompt('Enter a property name to delete');
const { [keyToDelete]: deletedKey, ...newObject } = car;
