export const actions = {
  SET_TERAVOZ_HANDLER: 'SET_TERAVOZ_HANDLER'
};

export const setTeravozWebRTCHandler = (teravoz) => (dispatch) => {
  dispatch({
    type: actions.SET_TERAVOZ_HANDLER,
    teravoz,
  });
};
