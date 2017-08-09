import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { HomeState } from './types';

/**
 * List of middlewares for redux
 */
let middlewares: Middleware[] = [thunkMiddleware];

/**
 * Add logger middleware in dev
 */
if (__DEV__) {
  /**
   * Logger middleware
   */
  const loggerMiddleware: Middleware = createLogger();
  middlewares.push(loggerMiddleware);
}
const store = createStore(rootReducer,
  applyMiddleware(...middlewares)
);
export default store;
