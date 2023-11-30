let login = prompt("Введіть логін:");

if (login === "admin") {
    let password = prompt("Введіть пароль:");

    if (password === "qwerty") {
        alert("Ласкаво просимо, адміністратор!");
    } else {
        alert("Невірний пароль!");
    }
} else {
    alert("Невірний логін!");
}
