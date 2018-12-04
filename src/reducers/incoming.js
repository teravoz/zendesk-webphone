import { actions } from '../actions/incoming';

const initialState = {
  actions: null,
  number: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case actions.SET_INCOMING_CALL:
      return {
        ...state,
        actions: action.actions,
        number: action.number,
      }
    default: return state;
  }
}
