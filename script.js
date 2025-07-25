const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", () => {
    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${fromCurrency.value}&to=${toCurrency.value}&amount=${amount.value}`;
    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-key': '38811f085bmshe2c68a829bd4009p17b7d5jsnde713f466317',
            'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
        }
    };

    fetch(url, options).then(res => res.json()).then(data => {
        if (data && data.result) {
            resultDiv.innerHTML = `${amount.value} ${fromCurrency.value} = ${data.result.toFixed(2)} ${toCurrency.value}`;
        }
    });
});
