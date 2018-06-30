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
        console.log(`responses=${JSON.stringify(responses)}`);
        dispatch(showExchangeTicker(responses));
      });
    };
};
