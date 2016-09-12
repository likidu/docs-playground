import { handleActions } from 'redux-actions';

export default handleActions({
  'fetch courses': (state = { courses: [] }, action) => ({
    courses: [...state.courses, action.payload.courses],
  }),
});
