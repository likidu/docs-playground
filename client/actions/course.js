import { createAction } from 'redux-actions';
import 'whatwg-fetch';

export const fetchCourses = createAction('fetch courses', async () => {
  try {
    const res = await fetch('../data/courses.json');
    if (res.status >= 200 && res.status < 300) {
      const json = await res.json();
      return json;
    }
  } catch(err) {
      console.error(err);
  }
});
