export default function tickerReducer(state = {}, action) {
    switch (action.type) {
      case 'SHOW_EXCHANGE_TICKER':
        return Object.assign({}, state, action.result);
      default:
        return state;
    }
  }
  