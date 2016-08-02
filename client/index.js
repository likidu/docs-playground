
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './containers/App';
import Conceptual from './containers/Conceptual';
import Hub from './containers/Hub';
import configure from './store';

require('./css/docs.css');

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Hub} />
        <Route path="set-up-enivornment" component={Conceptual} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
