import { createStore, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise';
import { logger } from '../middleware';
import rootReducer from '../reducers';

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    logger
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers'); // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
