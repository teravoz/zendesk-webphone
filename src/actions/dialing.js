export const actions = {
  SET_NUMBER: 'SET_NUMBER',
  SET_DIALING_ERROR: 'SET_DIALING_ERROR',
  CLEANUP_DIALING: 'CLEANUP_DIALING'
}

export const setNumber = (number) => dispatch => {
  dispatch({
    type: actions.SET_NUMBER,
    number
  });
};

export const setDialingError = (error) => dispatch => {
  dispatch({
    type: actions.SET_NUMBER,
    error
  });
};

export const cleanupDialing = () => dispatch => {
  dispatch({
    type: actions.CLEANUP_DIALING
  });
};
