
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import Conceptual from './containers/Conceptual';
import configure from './store';

require('./css/docs.css');

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Conceptual} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
