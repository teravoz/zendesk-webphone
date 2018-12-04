import { actions } from '../actions/call';

const directions = ['incoming', 'outgoing'];
const statuses = ['dialing', 'ongoing']; // Increment with the statuses

const initialState = {
  direction: '',
  status: '',
  controls: {
    it: false,
    keyboard: false,
    hold: false,
    mute: false,
  },
  number: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.START_CALL: return startCall(state, action);
    case actions.END_CALL: return endCall(state);
    case actions.CHANGE_STATUS: return changeStatus(state, action);
    case actions.TOGGLE_KEYBOARD: return toggleKeyboard(state);
    case actions.TOGGLE_HOLD: return toggleHold(state);
    case actions.TOGGLE_MUTE: return toggleMute(state);
    default: return state;
  }
}

function startCall(state, action) {
  const { direction, status, number } = action;
  if (directions.indexOf(direction) === -1 || statuses.indexOf(status) === -1) {
    return state;
  }
  return { ...state, direction, status, number };
}

function endCall(state) {
  return { ...state, direction: '', status: '', number: '' };
}

function changeStatus(state, action) {
  return { ...state, status: action.status };
}

function toggleHold(state) {
  const controls = { ...state.controls, hold: !state.controls.hold };
  return { ...state, controls };
}

function toggleKeyboard(state) {
  const controls = { ...state.controls, keyboard: !state.controls.keyboard };
  return { ...state, controls };
}

function toggleMute(state) {
  const controls = { ...state.controls, mute: !state.controls.mute };
  return { ...state, controls };
}
