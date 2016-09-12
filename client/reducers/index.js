import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import course from './course';
import feedback from './feedback';

export default combineReducers({
  routing,
  course,
  feedback,
});
