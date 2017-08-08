import * as React from 'react';
import {
  StyleSheet,
  View,
  Platform
} from 'react-native';
import HomeScreen from './containers/HomeScreen';
import {User, Message} from './types';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';

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
export default class App extends React.Component<Props, State> {

  /**
   * Render the app with the header and home screen
   */
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title='InboxApp' avatar='PS' />
          <HomeScreen />
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
