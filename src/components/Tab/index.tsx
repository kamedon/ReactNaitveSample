import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {View} from 'react-native';
import {BottomTabBar} from 'react-navigation-tabs';

export const HomeTabIcon = ({tintColor}) => (
  <Icon name="home" size={26} style={styles.icon} color={tintColor} />
);
export const SearchTabIcon = ({tintColor}) => (
  <Icon name="home" size={26} style={styles.icon} color={tintColor} />
);
export const NotificationTabIcon = ({tintColor}) => (
  <Icon name="home" size={26} style={styles.icon} color={tintColor} />
);
export const MeTabIcon = ({tintColor}) => (
  <Icon name="home" size={26} style={styles.icon} color={tintColor} />
);
export const TakeTabIcon = ({tintColor}) => (
  <View style={styles.takeTab}>
    <View style={[styles.takeTabRounded, {borderColor: tintColor}]}>
      <Icon
        name="home"
        size={18}
        style={styles.takeTabIcon}
        color={tintColor}
      />
    </View>
  </View>
);

export const TabBar = BottomTabBar;
