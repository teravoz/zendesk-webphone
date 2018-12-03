import ZAF from '../misc/ZAFClient';

export const actions = {
    SET_LOADING: 'SET_LOADING'
}

export const setLoading = (loading, text) => dispatch => {
  dispatch({
    type: actions.SET_LOADING,
    isLoading: loading,
    text: text || 'Só mais alguns segundos!'
  });
};