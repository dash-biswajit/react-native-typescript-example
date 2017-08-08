import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { HomeState } from './types';

/**
 * Logger middleware
 */
const loggerMiddleware: Middleware = createLogger();

const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
export default store;
