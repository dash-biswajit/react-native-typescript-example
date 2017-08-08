import * as React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Button
} from 'react-native';
import HomeScreen from './containers/HomeScreen';
import {User, Message} from './types';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import ToastNativeAndroid from './components/ToastNativeAndroid';

/**
 * PropTypes definition for the App
 */
export interface Props {

}

/**
 * State type definition for the App
 */
export interface State {

}

/**
 * Main app class. Renders the home screen with the header.
 */
export default class App extends React.PureComponent<Props, State> {

  /**
   * Render the app with the header and home screen
   */
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title='InboxApp' avatar='G' />
          <HomeScreen />
          {Platform.OS === 'android' && <Button title='show me' onPress={() => ToastNativeAndroid.showMe()} />}
          {Platform.OS === 'android' && <Button title='show toast' onPress={() => ToastNativeAndroid.showToast('Hello toast', 100)} />}
        </View>
      </Provider>
    );
  }
}

/**
 * Default styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: (Platform.OS === 'ios' ? 20 : 0)
  }
});
