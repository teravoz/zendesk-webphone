const START_CALL = 'START_CALL';
const SET_INCOMING_ACTIONS = 'SET_INCOMING_ACTIONS';
const END_CALL = 'END_CALL';
const CHANGE_STATUS = 'CHANGE_STATUS';
const TOGGLE_KEYBOARD = 'TOGGLE_KEYBOARD';
const TOGGLE_HOLD = 'TOGGLE_HOLD';
const TOGGLE_MUTE = 'TOGGLE_MUTE';

export const actions = {
  START_CALL,
  SET_INCOMING_ACTIONS,
  END_CALL,
  CHANGE_STATUS,
  TOGGLE_KEYBOARD,
  TOGGLE_HOLD,
  TOGGLE_MUTE
};

export const startCall = (direction, status, number) => ({
  type: START_CALL,
  direction,
  status,
  number
});

export const setIncomingActions = (actions) => ({
  type: SET_INCOMING_ACTIONS,
  actions
});

export const endCall = () => ({
  type: END_CALL
});

export const changeStatus = (status) => ({
  type: CHANGE_STATUS,
  status
});

export const toggleKeyboard = () => ({
  type: TOGGLE_KEYBOARD
});

export const toggleHold = () => (dispatch, getState) => {
  const { call, teravoz } = getState();
  teravoz[call.controls.hold ? 'unhold' : 'hold']();
  dispatch({ type: TOGGLE_HOLD });
};

export const toggleMute = () => (dispatch, getState) => {
  const { call, teravoz } = getState();
  teravoz[call.controls.mute ? 'unmute' : 'mute']();
  dispatch({ type: TOGGLE_MUTE });
};
