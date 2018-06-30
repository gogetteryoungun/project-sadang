import _ from 'lodash';
import Promise from 'bluebird';
import exchangeApi from './middleware';

const showExchangeTicker = (responses) => {
    const response = { data: responses };
  return { type: 'SHOW_EXCHANGE_TICKER', response };
}

export const loadAllExchangeTicker = (currency) => {
  const exchanges = _.keysIn(exchangeApi);
  return (dispatch) => {
    return Promise.map(exchanges, (exchange) => {
      return exchangeApi[exchange](currency)
      .then((response) => {
        return response;
      });
    })
    .then((responses) => {
      Promise.all(responses).then(function(items) {
        let arr = [];
        for (let item of items) {
          var ticker = {};
          ticker.exchange = item.exchange;

          let data = JSON.parse(item.response);
          switch (ticker.exchange) {
            case 'korbit':
            ticker.price = Number.parseInt(data.last);
            ticker.volume = Number.parseInt(data.volume);
            break;

            case 'bithumb':
            ticker.price = Number.parseInt(data.data.average_price);
            ticker.volume = Number.parseInt(data.data.volume_1day);
            break;

            case 'coinone':
            ticker.price = Number.parseInt(data.last);
            ticker.volume = Number.parseInt(data.volume);
            break;

            case 'bitstamp': {
              let price = Number.parseInt(data.bid) +
              Number.parseInt(data.ask);
              price /= 2;
              ticker.price = price;
              ticker.volume = data.volume;
            }
            break;

            case 'okcoin':
            let price = (Number.parseInt(data.ticker.buy) +
            Number.parseInt(data.ticker.sell)) / 2;
            ticker.price = price;
            ticker.volume = data.ticker.vol;
            break;
          }

          arr.push(ticker);
        }

        console.log(`arr: ${JSON.stringify(arr)}`);
        dispatch(showExchangeTicker(arr));
      });
    });
  };
};
