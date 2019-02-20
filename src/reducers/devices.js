import { actions } from '../actions/devices';

const initialState = {
  audio: {
    input: [],
    output: []
  },
  currentInput: { deviceId: 'default', label: 'Microfone default' },
  currentOutput: { deviceId: 'default', label: 'Alto-falante default' },
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DEVICES:
      return {
        ...state,
        audio: action.audioDevices
      };
    case actions.SET_AUDIO_INPUT:
      return {
        ...state,
        currentInput: action.selected
      };
    case actions.SET_AUDIO_OUTPUT:
      return {
        ...state,
        currentOutput: action.selected
      };
    case actions.SET_ERROR_DEVICES:
      return {
        ...state,
        error: action.error
      };
    default: return state;
  }
};
