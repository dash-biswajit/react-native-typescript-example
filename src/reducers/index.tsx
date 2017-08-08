import { HomeScreenAction } from '../actions';
import { HomeState } from '../types';
import * as constants from '../constants';
import { combineReducers } from 'redux';

/**
 * Reducer for user fetch call
 * @param state Home state
 * @param action Allowed home screen actions
 */
export function user(state: HomeState, action: HomeScreenAction): HomeState {
  switch (action.type) {
    case constants.REQUEST_USER:
    case constants.RECEIVE_USER:
      return Object.assign({}, { ...state });
    default:
      return state;
  }
}

/**
 * Reducer for messages fetch call
 * @param state Home state
 * @param action Allowed home screen actions
 */
export function messages(state: HomeState, action: HomeScreenAction): HomeState {
  switch (action.type) {
    case constants.REQUEST_MESSAGES:
    case constants.RECEIVE_MESSAGES:
      return Object.assign({}, { ...state });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  messages
});

export default rootReducer;
