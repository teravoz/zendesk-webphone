import { combineReducers } from 'redux';

import dialing from './dialing';
import loading from './loading';
import login from './login';
import incoming from './incoming';
import settings from './settings';
import teravoz from './teravoz';

export default combineReducers({
  dialing,
  loading,
  login,
  incoming,
  settings,
  teravoz
});

