import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import InboxItem from '../components/InboxItem';

/**
 * Interface to represent a user
 */
export interface User {
  /**
   * User id
   */
  id: Number;

  /**
   * Full name (First name <space> Last name)
   */
  fullName: string;

  /**
   * Optional: Url for the avatar
   */
  avatar?: string;
}

/**
 * Interface to represent a message
 */
export interface Message {
  /**
   * Unique id for the message
   */
  id: Number;

  /**
   * Name of the sender
   */
  sender: string;

  /**
   * Title of the message
   */
  title: string;

  /**
   * Message body
   */
  body: string;

  /**
   * Sent date
   */
  sent: Date;

  /**
   * Received date
   */
  received: Date;
}

/**
 * PropTypes definition
 */
export interface Props {
  /**
   * App user
   */
  user: User;

  /**
   * List of messages
   */
  messages?: Message[];
}

/**
 * State definition
 */
export interface State {

}

/**
 * Home screen
 */
export default class Home extends React.PureComponent<Props, State> {
  constructor() {
    super();
  }
  /**
   * Helper method to render a message as a FlatList item
   */
  _renderItem = (metadata: any) => {
    const item = metadata.item as Message;
    return (<InboxItem title={item.title} body={item.body} avatar={item.sender} />);
  }

  /**
   * Helper method to extract the unique key from a message
   */
  _keyExtractor = (item: any, index: Number) => {
    return item.id;
  }

  /**
   * Renders the home screen
   */
  render(): JSX.Element {
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

/**
 * Default style
 */
const styles = StyleSheet.create({
  /**
   * Container style
   */
  container: {
    padding: 15
  },
  /**
   * Welcome message
   */
  welcomeMessage: {
  },
  /**
   * List of messages
   */
  messages: {
    paddingTop: 10,
    paddingBottom: 10
  }
});
