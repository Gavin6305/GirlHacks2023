const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';
const coins = ['bitcoin', 'ethereum', 'litecoin']; // Add more cryptocurrencies if needed

function fetchCryptoPrices() {
    coins.forEach((coin) => {
        fetch(`${apiUrl}?ids=${coin}&vs_currencies=usd`)
            .then((response) => response.json())
            .then((data) => {
                const price = data[coin].usd;
                displayCryptoPrice(coin, price);
            })
            .catch((error) => console.error(error));
    });
}

function displayCryptoPrice(coin, price) {
    const cryptoList = document.querySelector('.crypto-list');
    const cryptoItem = document.createElement('div');
    cryptoItem.classList.add('crypto-item');
    cryptoItem.innerHTML = `<p>${coin.toUpperCase()}: $${price.toFixed(2)}</p>`;
    cryptoList.appendChild(cryptoItem);
}

fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000); // Refresh every minute
