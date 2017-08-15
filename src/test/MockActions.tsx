import * as constants from '../constants';

export const fetchUser = jest.fn(() => {
  return {type: constants.RECEIVE_USER, user: constants.DEFAULT_USER};
});

export const fetchMessages = jest.fn(() => {
  return {type: constants.RECEIVE_MESSAGES, messages: []};
});
