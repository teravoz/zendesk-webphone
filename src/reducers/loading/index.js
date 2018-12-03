import { actions } from '../../actions/loading';

const initialState = {
  isLoading: false,
}

const reducer = (state = initialState, action) => {
  if (action.type === actions.SET_LOADING) {
      return {
        ...state,
        isLoading: action.isLoading,
        text: actions.text
      }
    }
    return state;
}

export default reducer;
