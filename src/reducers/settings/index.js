import { actions } from '../../actions/settings';

const initialState = {
  apiKey: null,
  page: 'login',
  data: {},
  tones: null
}

export default (state = initialState, action) => {

  switch (action.type) {
    case actions.SET_WEBRTC_API_KEY:
      return {
        ...state,
        apiKey: action.apiKey
      };
    case actions.CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        data: action.data
      };
    case actions.GET_TONES:
      return {
        ...state,
        tones: action.tones,
      };
    default: return state;
  }
};
