import { actions } from '../../actions/teravoz';

const initialState = {
  handler: null,
}

const reducer = (state = initialState, action) => {
  if (action.type === actions.SET_TERAVOZ_HANDLER) {
    return {
      ...state,
      ...action.teravoz
    }
  }

  return state;
}

export default reducer;
