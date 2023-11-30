const credentials = {
    login: 'admin',
    password: 'qwerty',
};

function checkCredentials() {
    const enteredLogin = document.getElementById('login').value;
    const enteredPassword = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');

    if (enteredLogin === credentials.login && enteredPassword === credentials.password) {
        resultDiv.textContent = 'Успіх!';
        resultDiv.className = 'success';
    } else {
        resultDiv.textContent = 'Помилка входу. Перевірте логін та пароль.';
        resultDiv.className = 'error';
    }
}