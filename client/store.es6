import { applyMiddleware, combineReducers, createStore } from 'redux';

import { solvePromiseMiddleware } from './middlewares';
import * as reducers from './reducers';

const middlewares = [solvePromiseMiddleware];

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
const combined = combineReducers(reducers);
const store = createStoreWithMiddlewares(combined);

export default store;
