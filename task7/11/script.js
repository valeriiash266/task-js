function createFormFromObject(formData) {
    const form = document.createElement('form');

    Object.entries(formData).forEach(([key, value]) => {
        const label = document.createElement('label');
        label.textContent = `${key}: `;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = value;

        label.appendChild(input);
        form.appendChild(label);
    });

    document.body.appendChild(form);
}


const formData = { name: "John", age: 25, city: "New York" };
createFormFromObject(formData);
