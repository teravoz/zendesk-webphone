import { combineReducers } from 'redux';

import login from './login';
import settings from './settings';
import loading from './loading';

export default combineReducers({
  login,
  settings,
  loading
});

