import { combineReducers } from 'redux';
import ticker from './tickerReducer';
import selectedCurrency from './selectedCurrencyReducer';

const rootReducer = combineReducers({
  ticker,
  selectedCurrency,
});

export default rootReducer;
