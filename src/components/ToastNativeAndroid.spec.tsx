import * as React from 'react';
import * as enzyme from 'enzyme';
import { Text } from 'react-native';

jest.mock('./ToastNativeAndroid', () => {
  return {
    showMe: () => {
      console.log('Show me called');
    },
    showToast: (msg: string, duration: Number) => {
      console.log('Show toast called with', msg, duration);
    }
  };
});
const ToastNativeAndroid = require('./ToastNativeAndroid');

describe('ToastNativeAndroid tests', () => {
  it('renders the item correctly', () => {
    ToastNativeAndroid.showMe();
    ToastNativeAndroid.showToast('Hello world', 100);
  });
});

