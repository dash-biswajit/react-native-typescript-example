/**
 * Default avatar text
 */
import { Platform } from 'react-native';
const host: string = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

export const DEFAULT_AVATAR = 'A';
export type DEFAULT_AVATAR = typeof DEFAULT_AVATAR;

export const DEFAULT_USER = {id: -1, fullName: 'Guest', avatar: 'G'};
export type DEFAULT_USER = typeof DEFAULT_USER;

/**
 * Fetch user related constants
 */
export const REQUEST_USER = 'REQUEST_USER';
export type REQUEST_USER = typeof REQUEST_USER;
export const FETCH_USER = 'FETCH_USER';
export type FETCH_USER = typeof FETCH_USER;
export const RECEIVE_USER = 'RECEIVE_USER';
export type RECEIVE_USER = typeof RECEIVE_USER;
export const RECEIVE_USER_ERROR = 'RECEIVE_USER_ERROR';
export type RECEIVE_USER_ERROR = typeof RECEIVE_USER_ERROR;
export const FETCH_USER_URL = 'http://' + host + ':8081/src/test/data/user.json';
export type FETCH_USER_URL = typeof FETCH_USER_URL;

/**
 * Fetch messages related constants
 */
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export type REQUEST_MESSAGES = typeof REQUEST_MESSAGES;
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export type FETCH_MESSAGES = typeof FETCH_MESSAGES;
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export type RECEIVE_MESSAGES = typeof RECEIVE_MESSAGES;
export const RECEIVE_MESSAGES_ERROR = 'RECEIVE_MESSAGES_ERROR';
export type RECEIVE_MESSAGES_ERROR = typeof RECEIVE_MESSAGES_ERROR;
export const FETCH_MESSAGES_URL = 'http://' + host + ':8081/src/test/data/messages.json';
export type FETCH_MESSAGES_URL = typeof FETCH_MESSAGES_URL;
