import request from 'request-promise';

const exchangeApi = {
  bithumb: (currency) => {
    return request({
      url: `https://api.bithumb.com/public/ticker/${currency.toUpperCase()}`,
      method: 'GET',
    })
    .then((response) => {
      console.log(`[Exchange Response] Bithumb Response: ${JSON.stringify(response)}`);
      return { exchange: 'bithumb', response };
    });
  },
  korbit: (currency) => {
    const currencyPair=`${currency}_krw`
    return request({
      url: `https://api.korbit.co.kr/v1/ticker/detailed?currency_pair=${currencyPair}`,
      method: 'GET',
    })
    .then((response) => {
      console.log(`[Exchange Response] Korbit Response: ${JSON.stringify(response)}`);
      return { exchange: 'korbit', response };
    });
  },
  coinone: (currency) => {
    return request({
      url: `https://api.coinone.co.kr/ticker?=${currency}`,
      method: 'GET',
    })
    .then((response) => {
      console.log(`[Exchange Response] Coinone Response: ${JSON.stringify(response)}`);
      return { exchange: 'coinone', response };
    });
  },
  bitstamp: (currency) => {
    const currencyPair = `${currency}usd`;
    return request({
      url: `https://www.bitstamp.net/api/v2/ticker/${currencyPair}`,
      method: 'GET',
    })
    .then((response) => {
      console.log(`[Exchange Response] Bitstamp Response: ${JSON.stringify(response)}`);
      return { exchange: 'bitstamp', response };
    });
  },
  // kraken: (currency) => {
  //   const currencyPair = `${currency}usd`;
  //   return request({
  //     url: `https://api.kraken.com/0/public/Ticker${currencyPair}`,
  //     method: 'GET',
  //   })
  //   .then((response) => {
  //     console.log(`[Exchange Response] Bitstamp Response: ${JSON.stringify(response)}`);
  //     return response;
  //   });
  // },
  okcoin: (currency) => {
    const currencyPair = `${currency}_usd`;
    return request({
      url: `https://www.okcoin.com/api/v1/ticker.do?symbol=${currencyPair}`,
      method: 'GET',
    })
    .then((response) => {
      console.log(`[Exchange Response] okcoin Response: ${JSON.stringify(response)}`);
      return { exchange: 'okcoin', response };
    });
  },
};

export default exchangeApi;
