import { combineReducers } from 'redux';

import call from './call';
import configuration from './configuration';
import devices from './devices';
import dialing from './dialing';
import loading from './loading';
import login from './login';
import profile from './profile';
import settings from './settings';
import teravoz from './teravoz';

export default combineReducers({
  call,
  configuration,
  devices,
  dialing,
  loading,
  login,
  profile,
  settings,
  teravoz
});

