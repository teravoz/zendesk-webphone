export const actions = {
  GET_DEVICES: 'GET_DEVICES',
  SET_AUDIO_OUTPUT: 'SET_AUDIO_OUTPUT',
  SET_AUDIO_INPUT: 'SET_AUDIO_INPUT',
  SET_ERROR_DEVICES: 'SET_ERROR_DEVICES'
};

export const setAudioInput = (selected) => (dispatch) => dispatch({
  type: actions.SET_AUDIO_INPUT,
  selected
});

export const setAudioOutput = (selected) => (dispatch) => dispatch({
  type: actions.SET_AUDIO_OUTPUT,
  selected
});

export const setErrorDevices = (error) => (dispatch) => dispatch({
  type: actions.SET_ERROR_DEVICES,
  error
});

export const getDevices = () => (dispatch) => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(() => navigator.mediaDevices.enumerateDevices())
    .then((devices) => {

      const audioDevices = {
        input: [],
        output: []
      };

      let aInput = null;
      let aOutput = null;

      for (const { deviceId, kind, label } of devices) {
        if (kind === 'audioinput') {
          const device = { deviceId, label: label || `Microfone - ${deviceId}`};

          if (deviceId === 'default') {
            aInput = device;
          }
          
          audioDevices.input.push(device);
        } else if (kind === 'audiooutput') {
          const device = { deviceId, label: label || `Alto-falante - ${deviceId}` };

          if (deviceId === 'default') {
            aOutput = device;
          }

          audioDevices.output.push(device);
        }
      }

      dispatch({ type: actions.GET_DEVICES, audioDevices });
      dispatch(setAudioInput(aInput));
      dispatch(setAudioOutput(aOutput));
    })
    .catch((error) => dispatch(setErrorDevices(error)));
}