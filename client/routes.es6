import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';

import Root from './Root';
import {
  IndexView,
} from './views';

const getRoutes = history => {
  return (
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute
          component={IndexView}
        />
      </Route>
    </Router>
  );
};

export default getRoutes;
