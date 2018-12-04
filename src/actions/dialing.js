export const actions = {
  SET_NUMBER: 'SET_NUMBER',
  SET_COUNTRY_CODE: 'SET_COUNTRY_CODE',
  SET_DIALING: 'SET_DIALING',
  DISABLE_DIALING: 'DISABLE_DIALING',
  REMOVE_NUMBER: 'REMOVE_NUMBER',
  CLEANUP_DIALING: 'CLEANUP_DIALING'
}

export const setNumber = (number) => dispatch => {
  dispatch({
    type: actions.SET_NUMBER,
    number
  });
};

export const setCountryCode = (countryCode) => dispatch => {
  dispatch({
    type: actions.SET_COUNTRY_CODE,
    countryCode: countryCode
  });
};

export const setDialing = (dialing) => dispatch => {
  dispatch({
    type: actions.SET_DIALING,
    isDialing: dialing 
  });
};

export const removeNumber = () => dispatch => {
  dispatch({
    type: actions.REMOVE_NUMBER
  });
};

export const cleanupDialing = () => dispatch => {
  dispatch({
    type: actions.CLEANUP_DIALING
  });
};