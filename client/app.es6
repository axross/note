import { createHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import getRoutes from './routes';

document.addEventListener('DOMContentLoaded', () => {
  const history = createHistory();

  React.render((
    <Provider store={store}>
      {() => getRoutes(history)}
    </Provider>
  ), document.getElementById('app'));
});
