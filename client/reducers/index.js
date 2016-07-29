import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import feedback from './feedback';

export default combineReducers({
  routing,
  feedback,
});
