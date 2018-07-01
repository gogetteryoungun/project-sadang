export default function selectedCurrencyReducer(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_DASHBOARD_CURRENCY':
      const r = Object.assign({}, state, action.response);
      return r;
    default:
      return state;
  }
}

