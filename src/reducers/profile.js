import { actions } from '../actions/profile';

const initialState = {
  name: '',
  email: '',
  tags: [],
  photo: null
}

export default (state = initialState, action) => {

  switch(action.type) {
    case actions.CLEAR_PROFILE_INFO:
      return {...state, ...initialState };
    case actions.SET_PROFILE_INFO:
      const { name, email, tags, photo } = action;
      return {...state, name, email, tags, photo };
    default: return state;
  }
}
