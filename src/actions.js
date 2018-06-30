import _ from 'lodash';
import exchangeApi from './middleware';
export const loadAllExchangeTicker = (currency) => {
  console.log(`all exchanges=${_.keysIn(exchangeApi)}`);
};