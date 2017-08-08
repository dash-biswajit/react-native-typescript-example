import * as React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Home, {User, Message} from './containers/Home';
import Header from './components/Header';
export interface Props {

}
export interface State {

}

export default class App extends React.Component<Props, State> {
  render() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  }
});
