import { handleActions } from 'redux-actions';

const initialState = {
  courses: [],
};

export default handleActions({
  'fetch courses': (state, action) => ({
    // courses: [...state.courses, action.payload.courses],
    courses: action.payload.courses,
  }),
}, initialState);
