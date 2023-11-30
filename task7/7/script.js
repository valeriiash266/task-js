function checkLoginAndPassword(correctLogin, correctPassword) {
    const enteredLogin = prompt("Enter your login:");
    const enteredPassword = prompt("Enter your password:");

    return enteredLogin === correctLogin && enteredPassword === correctPassword;
}


console.log(checkLoginAndPassword("user123", "pass123"));
