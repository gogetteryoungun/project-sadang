import { combineReducers } from 'redux';
import ticker from './tickerReducer';
const rootReducer = combineReducers({
  ticker,
});
export default rootReducer;
