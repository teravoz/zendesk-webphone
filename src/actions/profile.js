import querystring from 'querystring';
import ZAF from '../misc/ZAFClient';

const CLEAR_PROFILE_INFO = 'CLEAR_PROFILE_INFO';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

export const actions = {
  CLEAR_PROFILE_INFO,
  SET_PROFILE_INFO
};

export const clearProfileInfo = () => ({
  type: CLEAR_PROFILE_INFO
});

export const setProfileInfo = (name, email, tags, photo) => ({
  type: SET_PROFILE_INFO,
  name,
  email,
  tags,
  photo
});

export const fetchProfileByNumber = (number) => (dispatch) => {
  const qs = querystring.stringify({
    query: `type:user phone:${number}`
  });

  // requesting the user by phone number
  ZAF
    .client
    .request(`/api/v2/search.json?${qs}`)
    .then((response) => {
      if (response.count > 0 && response.results.length > 0) {
        const user = response.results[0];
        return dispatch(setProfileInfo(
          user.name,
          user.email,
          user.tags,
          user.photo && user.photo.content_url
        ));
      }

      dispatch(setProfileInfo(
        number,
        `${number}@teravoz-integracao.com`,
        [],
        null
      ));
    })
    .catch(() => dispatch(clearProfileInfo()));;
};
