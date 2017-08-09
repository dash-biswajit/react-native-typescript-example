import * as React from 'react';

import { userState, messagesState } from './index';
import * as constants from '../constants';
import { HomeState, Message } from '../types';
import { HomeScreenAction } from '../actions';

describe('Reducer tests', () => {
  it('User reducer tests', () => {
    expect(userState({type: constants.REQUEST_USER} as HomeState, {} as HomeScreenAction)).toEqual({type: constants.REQUEST_USER});
    expect(userState({type: constants.RECEIVE_USER} as HomeState, {type: constants.RECEIVE_USER, user: constants.DEFAULT_USER} as HomeScreenAction)).toEqual({user: constants.DEFAULT_USER});
    expect(userState({type: constants.RECEIVE_USER_ERROR} as HomeState, {} as HomeScreenAction)).toEqual({type: constants.RECEIVE_USER_ERROR});
  });
  it('Messages reducer tests', () => {
    expect(messagesState({type: constants.REQUEST_MESSAGES} as HomeState, {} as HomeScreenAction)).toEqual({type: constants.REQUEST_MESSAGES});
    expect(messagesState({type: constants.RECEIVE_MESSAGES} as HomeState, {type: constants.RECEIVE_MESSAGES, messages: []} as HomeScreenAction)).toEqual({messages: []});
    expect(userState({type: constants.RECEIVE_MESSAGES_ERROR} as HomeState, {} as HomeScreenAction)).toEqual({type: constants.RECEIVE_MESSAGES_ERROR});
  });
});
