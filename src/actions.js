import _ from 'lodash';
import Promise from 'bluebird';
import exchangeApi from './middleware';

/*
 * Description: dispatches which currency to be selected.
*/

const _changeSelectedCurrency = (currency) => {
  const response = { 'selectedCurrency': currency };
  return { type: 'CHANGE_DASHBOARD_CURRENCY', response };
};

export const changeSelectedCurrency = (currency) => {
  return (dispatch) => {
    dispatch(_changeSelectedCurrency(currency));
    loadAllExchangeTicker(currency);
  };
};

const showExchangeTicker = (responses) => {
    const response = { data: responses };
    return { type: 'SHOW_EXCHANGE_TICKER', response };
};

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
        let korbitPrice = 0;
        for (let item of items) {
          var ticker = {};
          ticker.exchange = item.exchange;

          let data = JSON.parse(item.response);
          switch (ticker.exchange) {
            case 'korbit':
            ticker.price = Number.parseInt(data.last);
            ticker.volume = Number.parseInt(data.volume);
            korbitPrice = data.last;
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

        console.log(`korbit.price: ${korbitPrice}`);
        for (var item of arr) {
          console.log(`item: ${JSON.stringify(item)}`);
          item.priceDifference = (item.price - korbitPrice) / korbitPrice * 100;
          item.priceDifference = item.priceDifference.toFixed(2);
          console.log(`${item.priceDifference}`);

        }

        console.log(`arr: ${JSON.stringify(arr)}`);
        dispatch(showExchangeTicker(arr));
      });
    });
  };
};
