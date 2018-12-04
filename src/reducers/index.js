import { combineReducers } from 'redux';

import login from './login';
import settings from './settings';
import loading from './loading';
import dialing from './dialing';
import teravoz from './teravoz';

export default combineReducers({
  login,
  settings,
  loading,
  dialing,
  teravoz
});

