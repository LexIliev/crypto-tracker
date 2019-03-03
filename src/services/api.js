export const fetchCryptoData = () =>
  fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
