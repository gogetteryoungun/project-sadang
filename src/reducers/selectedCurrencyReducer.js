export default function selectedCurrencyReducer(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_DASHBOARD_CURRENCY':
      return Object.assign({}, state, action.response);
    default:
      return state;
  }
}

