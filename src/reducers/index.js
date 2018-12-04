import { combineReducers } from 'redux';

import call from './call';
import dialing from './dialing';
import loading from './loading';
import login from './login';
import incoming from './incoming';
import profile from './profile';
import settings from './settings';
import teravoz from './teravoz';

export default combineReducers({
  call,
  dialing,
  loading,
  login,
  incoming,
  profile,
  settings,
  teravoz
});

