import * as React from 'react';
import {
  StyleSheet,
  View,
  Platform
} from 'react-native';
import Home, {User, Message} from './containers/Home';
import Header from './components/Header';

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
    const user: User = {id: 1000, fullName: 'Prabhu Subramanian', avatar: 'PS'};
    const messages: Message[] = [
      {id: 1, sender: 'user 1', title: 'Hello mate', body: 'How are you doing?', sent: new Date(), received: new Date()}
    ];
    return (
      <View style={styles.container}>
        <Header title='InboxApp' avatar={user.avatar} />
        <Home user={user} messages={messages} />
      </View>
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
