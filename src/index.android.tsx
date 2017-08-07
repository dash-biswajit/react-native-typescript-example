/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Home, {User, Message} from './containers/Home';
export interface Props {

}
export interface State {

}

export default class MyAwesomeProject extends React.Component<Props, State> {
  render() {
    const user: User = {id: 1000, fullName: 'Prabhu Subramanian', avatar: 'PS'};
    return (
      <View style={styles.container}>
        <Home user={user} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('MyAwesomeProject', () => MyAwesomeProject);
