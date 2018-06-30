import _ from 'lodash';
import exchangeApi from './middleware';

const showExchangeTicker = (response) => {
  return { type: 'SHOW_EXCHANGE_TICKER', response };
}

export const loadAllExchangeTicker = (currency) => {
  console.log(`all exchanges=${_.keysIn(exchangeApi)}`);
    return (dispatch) => {
      return exchangeApi.bithumb(currency)
      .then((response) => {
        dispatch(showExchangeTicker(response));
      });
    };
};
