import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import hub from './hub';
import feedback from './feedback';

export default combineReducers({
  routing,
  hub,
  feedback,
});
