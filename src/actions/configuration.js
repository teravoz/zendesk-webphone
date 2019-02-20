export const actions = {
  CONFIGURATION_POP: 'CONFIGURATION_POP',
  CONFIGURATION_PUSH: 'CONFIGURATION_PUSH',
  CONFIGURATION_CLEAR: 'CONFIGURATION_CLEAR'
};


export function push({ previous, to }) {
  return (dispatch) => {
    dispatch({
      type: actions.CONFIGURATION_PUSH,
      previous,
      to
    });
  };
}

export function pop() {
  return (dispatch) => {
    dispatch({ type: actions.CONFIGURATION_POP });
  };
}

export function clear() {
  return (dispatch) => {
    dispatch({ type: actions.CONFIGURATION_CLEAR });
  };
}


