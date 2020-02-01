import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class IconButton extends React.Component {
  static defaultProps = {
    name: 'ios-arrow-back',
    size: 32,
    color: '',
    style: null,
    onPress: () => {},
  };

  render(): React.ReactElement {
    const {name, size, color, style, onPress} = this.props;
    return (
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Ionicons name={name} size={size} color={color} />
      </TouchableOpacity>
    );
  }
}
