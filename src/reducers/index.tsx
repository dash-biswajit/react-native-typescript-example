import { HomeScreenAction } from '../actions';
import { HomeState, User, Message } from '../types';
import * as constants from '../constants';
import { combineReducers } from 'redux';

/**
 * Reducer for user fetch call
 * @param state Home state
 * @param action Allowed home screen actions
 */
export function userState(state: HomeState = {}, action: HomeScreenAction): HomeState {
  switch (action.type) {
    case constants.REQUEST_USER:
    case constants.RECEIVE_USER:
      return { user: action.user };
    default:
      return state;
  }
}

/**
 * Reducer for messages fetch call
 * @param state Home state
 * @param action Allowed home screen actions
 */
export function messagesState(state: HomeState = {}, action: HomeScreenAction): HomeState {
  switch (action.type) {
    case constants.REQUEST_MESSAGES:
    case constants.RECEIVE_MESSAGES:
      return { messages: action.messages };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userState,
  messagesState
});

export default rootReducer;
