
htmlTree.children.forEach((child) => {
    if (child.children) {
        child.children.forEach((grandchild) => {
            grandchild.parent = child;
        });
    }
});

const okButton = htmlTree.children[1].children[0];
okButton.attrs.id = prompt('Enter a new value for id attribute of the OK button');
