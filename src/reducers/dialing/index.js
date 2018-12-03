import { actions } from '../../actions/dialing';

const initialState = {
  isDialing: false,
  number: null,
  countryCode: null
}

const reducer = (state = initialState, action) => {
  if (action.type === actions.SET_COUNTRY_CODE) {
    return {
      ...state,
      countryCode: action.countryCode
    }
  }

  if (action.type === actions.SET_NUMBER) {
    return {
      ...state,
      number: action.number
    }
  }

  if (action.type === actions.SET_DIALING) {
    return {
      ...state,
      isDialing: action.isDialing
    }
  }

  return state;
}

export default reducer;
