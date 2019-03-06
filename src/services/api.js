export const fetchCryptoData = () => fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10');

export const fetchCryptoDetails = id => fetch(`https://api.coinmarketcap.com/v1/ticker/${id}`);
