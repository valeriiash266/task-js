let currency = prompt("Введіть валюту (usd, eur, інші):").toUpperCase();
let buy = confirm("Ви хочете купити валюту?");

let rate = buy
    ? currency === "USD"
        ? 27.5
        : currency === "EUR"
            ? 33.2
            : 0
    : currency === "USD"
        ? 27.2
        : currency === "EUR"
            ? 32.8
            : 0;

if (rate !== 0) {
    let amount = +prompt("Введіть суму для обміну:");
    let result = buy ? amount / rate : amount * rate;
    alert(`Отримаєте: ${result.toFixed(2)} ${currency}`);
} else {
    alert("Валюта не підтримується");
}
