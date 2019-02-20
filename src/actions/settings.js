import ZAF from '../misc/ZAFClient';
import createInstance from  '../misc/digit-tones';

export const actions = {
    SET_WEBRTC_API_KEY: 'SET_WEBRTC_API_KEY',
    CHANGE_PAGE: 'CHANGE_PAGE',
    GET_TONES: 'GET_TONES'
}

export const setWebRTCApiKey = () => dispatch => {
  ZAF.client.metadata().then((data) => {
    const { settings } = data;
    dispatch({
        type: actions.SET_WEBRTC_API_KEY,
        apiKey: settings.api_key
    });
  });
}


export const setAppHeight = height => dispatch => {
  if (!height) {
    return;
  }
  ZAF.client.invoke('resize', { width: '264px', height: (height) + 'px' });
}

export const changePage = (page, data = {}) => ({
    type: actions.CHANGE_PAGE,
    page,
    data,
})

// I'm doing that because the Audio API setSinkId is still in draft. As a workaround, I'm using the <audio> tags.
export const getTones = (references) => (dispatch, getState) => {
  const { devices } = getState();
  const instance = createInstance(devices.currentOutput);
  dispatch({
    type: actions.GET_TONES,
    tones: {
      '0': instance(`${process.env.SOUND_BASE_PATH}/0.mp3`, references['0']),
      '1': instance(`${process.env.SOUND_BASE_PATH}/1.mp3`, references['1']),
      '2': instance(`${process.env.SOUND_BASE_PATH}/2.mp3`, references['2']),
      '3': instance(`${process.env.SOUND_BASE_PATH}/3.mp3`, references['3']),
      '4': instance(`${process.env.SOUND_BASE_PATH}/4.mp3`, references['4']),
      '5': instance(`${process.env.SOUND_BASE_PATH}/5.mp3`, references['5']),
      '6': instance(`${process.env.SOUND_BASE_PATH}/6.mp3`, references['6']),
      '7': instance(`${process.env.SOUND_BASE_PATH}/7.mp3`, references['7']),
      '8': instance(`${process.env.SOUND_BASE_PATH}/8.mp3`, references['8']),
      '9': instance(`${process.env.SOUND_BASE_PATH}/9.mp3`, references['9']),
      '*': instance(`${process.env.SOUND_BASE_PATH}/5.mp3`, references['*']),
      '#': instance(`${process.env.SOUND_BASE_PATH}/6.mp3`, references['#'])
    }
  })
}