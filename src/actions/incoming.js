
const SET_INCOMING_CALL = 'SET_INCOMING_CALL';
const END_INCOMING_CALL = 'END_INCOMING_CALL';

export const actions = {
  SET_INCOMING_CALL,
  END_INCOMING_CALL
};

export const setIncomingCall = (actions, number) => ({
  type: SET_INCOMING_CALL,
  actions,
  number
});

export const endIncomingCall = () => ({
  type: END_INCOMING_CALL,
});
