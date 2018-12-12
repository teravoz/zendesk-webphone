import { actions } from '../../actions/login';

const initialState = {
  error: null,
  username: null,
  password: null,
  remainConnected: true,
  registered: false
};

const reducer = (state = initialState, action) => {
  if (action.type === actions.SET_USERNAME) {
      return {
        ...state,
        username: action.username
      }
    }

    if (action.type === actions.SET_PASSWORD) {
      return {
        ...state,
        password: action.password
      }
    }

    if (action.type === actions.SET_REMAIN_CONNECTED) {
      return {
        ...state,
        remainConnected: action.checked
      }
    }


    if (action.type === actions.SET_ERROR) {
      return {
        ...state,
        error: action.error 
      }
    }

    if (action.type === actions.SET_REGISTERED) {
      return {
        ...state,
        registered: action.registered
      }
    }

    if (action.type === actions.CLEAR_LOGIN) {
      return {
        ...state,
        ...initialState
      }
    }

    return state;
}

export default reducer;
