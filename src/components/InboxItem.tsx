import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * PropTypes definition
 */
export interface Props {
    title: string;
    body?: string;
    avatar?: string;
}

/**
 * State definition
 */
export interface State {

}

/**
 * Inbox item component. Maps directly to a single inbox message
 */
export default class InboxItem extends React.PureComponent<Props, State> {
  /**
   * Renders the title, body and avatar from the message
   */
  render(): JSX.Element {
    const { title, body, avatar } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text>{avatar}</Text>
        </View>
        <View>
          <Text>{title}</Text>
          <Text>{body}</Text>
        </View>
      </View>
    );
  }
}

/**
 * Default styles
 */
const styles = StyleSheet.create({
  container: {
    borderColor: '#EEE',
    borderWidth: 1,
    padding: 5
  },
});
