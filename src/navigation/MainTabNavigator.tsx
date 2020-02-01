import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';
import {
  HomeTabIcon,
  MeTabIcon,
  NotificationTabIcon,
  SearchTabIcon,
  TabBar,
  TakeTabIcon,
} from '../components/Tab';

const createTabStack = (title, screen) =>
  createStackNavigator({[title]: {screen}});

export default createBottomTabNavigator(
  {
    HomeTab: {
      screen: createTabStack('HomeTab', HomeScreen),
      navigationOptions: () => ({
        tabBarIcon: HomeTabIcon,
      }),
    },
    SearchTab: {
      screen: createTabStack('SearchTab', SearchScreen),
      navigationOptions: () => ({
        tabBarIcon: SearchTabIcon,
      }),
    },
    TakeTab: {
      screen: () => null,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: TakeTabIcon,
        tabBarOnPress: () => {
          navigation.push('TakeModel');
        },
      }),
    },
    NotificationTab: {
      screen: createTabStack('NotificationTab', NotificationScreen),
      navigationOptions: () => ({
        tabBarIcon: NotificationTabIcon,
      }),
    },
    MeTab: {
      screen: createTabStack('MeTab', UserScreen),
      navigationOptions: () => ({
        tabBarIcon: MeTabIcon,
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#333',
      inactiveTintColor: '#bbb',
      style: {
        backgroundColor: '#fafafa',
      },
    },
    tabBarComponent: TabBar,
  },
);
