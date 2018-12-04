import { actions } from '../../actions/dialing';

const initialState = {
  isDialing: false,
  number: '',
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
      number: state.number ? `${state.number}${action.number}` : action.number
    }
  }

  if (action.type === actions.REMOVE_NUMBER) {
    return {
      ...state,
      number: state.number ? state.number.substring(0, state.number.length - 1) : ''
    }
  }

  if (action.type === actions.SET_DIALING) {
    return {
      ...state,
      isDialing: action.isDialing
    }
  }

  if (action.type === actions.CLEANUP_DIALING) {
    return initialState;
  }

  return state;
}

export default reducer;
