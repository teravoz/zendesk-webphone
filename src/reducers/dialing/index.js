import { actions } from '../../actions/dialing';

const initialState = {
  error: null,
  number: ''
}

const reducer = (state = initialState, action) => {

  if (action.type === actions.SET_NUMBER) {
    return { ...state, number: action.number  }
  }

  else if (action.type === actions.SET_DIALING_ERROR) {
    return { ...state, error: action.error };
  }

  else if (action.type === actions.CLEANUP_DIALING) {
    return { ...initialState };
  }

  return state;
}

export default reducer;
