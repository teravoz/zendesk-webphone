import { actions } from '../../actions/settings';

const initialState = {
  apiKey: null,
  page: 'login',
  data: {},
}

const reducer = (state = initialState, action) => {
  if (action.type === actions.SET_WEBRTC_API_KEY) {
      return {
        ...state,
        apiKey: action.apiKey
      }
    }

    if (action.type === actions.CHANGE_PAGE) {
      return {
        ...state,
        page: action.page, 
        data: action.data
      }
    }

    return state;
}

export default reducer;
