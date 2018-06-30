import request from 'request-promise';

const exchangeApi = {
  bithumb: (currency) => {
    return request({
      url: `https://api.bithumb.com/public/ticker/${currency}`,
      method: 'GET',
    })
    .then((response) => {
      console.log(`[Exchange Response] Bithumb Response: ${JSON.stringify(response)}`);
    });
  },
  korbit: (currency) => {
    const currencyPair=`${currency}-krw`
    return request({
      url: `https://api.korbit.co.kr/v1/ticker${currencyPair}`,
      method: 'GET',
    })
    .then((response) => {
      console.log(`[Exchange Response] Korbit Response: ${JSON.stringify(response)}`);
    });
  },
  coinone: (currency) => {
    return request({
      url: `https://api.coinone.co.kr/ticker/${currency}`,
      method: 'GET',
    })
    .then((response) => {
      console.log(`[Exchange Response] Coinone Response: ${JSON.stringify(response)}`);
    });
  }
};

export default exchangeApi;
