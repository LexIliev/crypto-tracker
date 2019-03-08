export const request = async (endpoint, method, body) => {
  const headers = { Accept: 'application/json' };

  const response = await fetch(endpoint, {
    headers,
    method,
    body: JSON.stringify(body),
  });

  return response.json();
};

export const fetchCryptoData = () =>
  request('https://api.coinmarketcap.com/v1/ticker/?limit=10', 'GET');

export const fetchCryptoDetails = (id) =>
  request(`https://api.coinmarketcap.com/v1/ticker/${id}`, 'GET');
