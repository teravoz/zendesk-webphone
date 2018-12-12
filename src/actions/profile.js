import querystring from 'querystring';
import ZAF from '../misc/ZAFClient';
import Terautils from 'terautils';

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
  if (!Terautils.numberType.getType(number)) {
    return dispatch(setProfileInfo(
      number,
      'Sinalização',
      [],
      null
    ));
  }

  const { ddd, preffix, suffix } = Terautils.numberParser.slice(number);
  const qs = querystring.stringify({ query: `type:user phone:*${suffix}` });

  // requesting the user by phone number
  ZAF
    .client
    .request(`/api/v2/search.json?${qs}`)
    .then((response) => {
      if (response && response.results && response.count > 0) {
        if (response.count == 1) {
          return dispatchPerson(response.results[0], dispatch);
        } else {
          // Create regex to traverse list checking number by number
          let rgxPreffix, rgxDDD;
          if (preffix) {
            rgxPreffix = new RegExp(preffix);

            if (ddd) {
              rgxDDD = new RegExp(ddd);
            }
          }

          for (const person of response.results) {
            // If it's equal to the number provided, return it;
            if (person.phone == number) {
              return dispatchPerson(person, dispatch);
            }
            // Apply the regexes
            if (rgxPreffix && rgxPreffix.test(person.phone)) {
              if (rgxDDD && rgxDDD.test(person.phone)) {
                return dispatchPerson(person, dispatch);
              }
              return dispatchPerson(person, dispatch);
            }
          }
        }
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

function dispatchPerson(person, dispatch) {
  return dispatch(setProfileInfo(
    person.name,
    person.email,
    person.tags,
    person.photo && person.photo.content_url
  ));
}
