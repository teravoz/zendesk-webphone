import ZAF from '../misc/ZAFClient';

export const actions = {
    SET_WEBRTC_API_KEY: 'SET_WEBRTC_API_KEY',
    CHANGE_PAGE: 'CHANGE_PAGE'
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


export const setAppHeight = height => {
    if (!height) {
      return;
    }
    ZAF.client.invoke('resize', { width: '265px', height: (height) + 'px' });
}

export const changePage = (page, data = {}) => ({
    type: actions.CHANGE_PAGE,
    page,
    data,
})
