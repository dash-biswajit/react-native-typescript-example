import configureStore from 'redux-mock-store';
import { Middleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares: Middleware[] = [thunk];
const mockStore = configureStore(middlewares);

export default mockStore;
