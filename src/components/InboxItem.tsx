import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export interface Props {
    title: string;
    body?: string;
    avatar?: string;
}

export default class InboxItem extends React.PureComponent<Props, object> {
  render() {
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

const styles = StyleSheet.create({
  container: {
    borderColor: '#EEE',
    borderWidth: 1,
    padding: 5
  },  
});
