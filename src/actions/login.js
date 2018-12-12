export const actions = {
  SET_USERNAME: 'SET_USERNAME',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_ERROR: 'SET_ERROR',
  SET_REGISTERED: 'SET_REGISTERED',
  SET_REMAIN_CONNECTED: 'SET_REMAIN_CONNECTED',
  CLEAR_LOGIN: 'CLEAR_LOGIN'
};


export const setUsername = (username) => dispatch => {
  dispatch({ type: actions.SET_USERNAME, username });
}

export const setPassword = (password) => dispatch => {
  dispatch({ type: actions.SET_PASSWORD, password });
}

export const setRemainConnected = (checked) => dispatch => {
  dispatch({ type: actions.SET_REMAIN_CONNECTED, checked });
}

export const setError = (error) => dispatch => {
  dispatch({ type: actions.SET_ERROR, error });
}

export const setRegistered = (registered) => dispatch => {
  dispatch({ type: actions.SET_REGISTERED, registered });
}

export const clearLogin = () => dispatch => {
  dispatch({ type: actions.CLEAR_LOGIN });
}




