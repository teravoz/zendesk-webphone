import { combineReducers } from 'redux';

import dialing from './dialing';
import loading from './loading';
import login from './login';
import incoming from './incoming';
import profile from './profile';
import settings from './settings';
import teravoz from './teravoz';

export default combineReducers({
  dialing,
  loading,
  login,
  incoming,
  profile,
  settings,
  teravoz
});

