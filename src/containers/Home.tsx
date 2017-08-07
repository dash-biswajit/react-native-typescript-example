import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import InboxItem from '../components/InboxItem';

export interface User {
  id: Number;
  fullName: string;
  avatar?: string;
}
export interface Message {
  id: Number;
  sender: string;
  title: string;
  body: string;
  sent: Date;
  received: Date;
}
export interface Props {
  user: User;
  messages?: Message[];
}
export interface State {

}
export default class Home extends React.PureComponent<Props, State> {
  constructor() {
    super();
  }
  _renderItem = (metadata: any) => {
    const item = metadata.item as Message;
    return (<InboxItem title={item.title} body={item.body} avatar={item.sender} />);
  }
  _keyExtractor = (item: any, index: Number) => {
    return item.id;
  }
  render() {
    const { user, messages } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.welcomeMessage}><Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome {user.fullName}</Text></View>
        <View style={styles.messages}>
          <FlatList data={messages as Message[]} renderItem={this._renderItem} keyExtractor={this._keyExtractor} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15
  },
  welcomeMessage: {
  },
  messages: {
    paddingTop: 10,
    paddingBottom: 10
  }
});
