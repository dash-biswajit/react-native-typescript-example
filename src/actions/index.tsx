import * as constants from '../constants';
import { User, Message } from '../types';
import { Dispatch } from 'react-redux';

/**
 * Fetch user action interface
 */
export interface RequestUser {
  type: constants.REQUEST_USER;
}
export interface FetchUser {
  type: constants.FETCH_USER;
}
export interface ReceiveUser {
  type: constants.RECEIVE_USER;
  user: User;
}

/**
 * Fetch messages action interface
 */
export interface RequestMessages {
  type: constants.REQUEST_MESSAGES;
}
export interface FetchMessages {
  type: constants.FETCH_MESSAGES;
}
export interface ReceiveMessages {
  type: constants.RECEIVE_MESSAGES;
  messages: Message[]
}

/**
 * Home screen supports fetch user or fetch messages action
 */
export type HomeScreenAction = RequestUser | FetchUser | ReceiveUser | RequestMessages | FetchMessages | ReceiveMessages;

export function requestUser(): RequestUser {
  return {
    type: constants.REQUEST_USER
  }
}

/**
 * Method to fetch user
 */
export const fetchUser = () => (dispatch: Dispatch<HomeScreenAction>): Promise<ReceiveUser> => {
  dispatch(requestUser());
  return fetch(constants.FETCH_USER_URL)
    .then(response => response.json())
    .then(json => dispatch(receiveUser(json)));
}

export function receiveUser(data: any): ReceiveUser {
  return {
    type: constants.RECEIVE_USER,
    user: ({id: data.id, fullName: data.fullName, avatar: data.avatar} as User)
  }
}

export function requestMessages(): RequestMessages {
  return {
    type: constants.REQUEST_MESSAGES
  }
}

/**
 * Method to fetch messages
 */
export const fetchMessages = () => (dispatch: Dispatch<HomeScreenAction>): Promise<ReceiveMessages> => {
  dispatch(requestMessages());
  return fetch(constants.FETCH_MESSAGES_URL)
    .then(response => response.json())
    .then(json => dispatch(receiveMessages(json)));
}

export function receiveMessages(data: any): ReceiveMessages {
  return {
    type: constants.RECEIVE_MESSAGES,
    messages: []
  }
}
