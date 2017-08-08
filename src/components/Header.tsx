import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Width and height of the app window
 */
let {width, height} = Dimensions.get('window');

/**
 * Item width. Third of total width
 */
let ItemWidth = width / 3;

/**
 * Item height. 2/11th of the width
 */
let ItemHeight = ItemWidth * 2 / 11;

/**
 * PropTypes definition
 */
export interface Props {
  /**
   * Header title
   */
  title: string;

  /**
   * Optional: User avatar url.
   */
  avatar?: string;
}

/**
 * State definition
 */
export interface State {

}

/**
 * Header component
 */
export default class Header extends React.PureComponent<Props, State> {
  /**
   * Render the header with the menubar icon, title and avatar
   */
  render(): JSX.Element {
    return (
    <View style={styles.header}>
      <View style={styles.menuIcon}>
        <TouchableOpacity style={styles.iconSection}>
        <Icon name='bars' size={22} color='#fff' style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
      <View style={styles.avatar}>
        <Text>{this.props.avatar}</Text>
      </View>
    </View>
    )
  }
}

/**
 * Default styles
 */
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0033',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50
  },
  headerTitle: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0
  },
  avatar: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  menuIcon: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15
  },
  icon: {

  },
  iconSection: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingRight: 20,
    alignItems: 'center'
  },
  iconSection_back: {
    paddingTop: 21,
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo_section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 15,
    fontWeight: '500',
    alignItems: 'center'
  }
});
