import {createStackNavigator} from 'react-navigation-stack';
import TakeScreen from '../screens/TakeScreen';
import TakePublishScreen from '../screens/TakePublishScreen';
import MainTabNavigator from './MainTabNavigator';
import UserScreen from '../screens/UserScreen';
import PostScreen from '../screens/PostScreen';
import TagScreen from '../screens/TagScreen';

const TaskStack = createStackNavigator(
  {
    Take: {screen: TakeScreen},
    TakePublish: {screen: TakePublishScreen},
  },
  {
    headerMode: 'screen',
  },
);

const CardNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    User: {screen: UserScreen},
    Tag: {screen: TagScreen},
    Post: {screen: PostScreen},
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: '#333',
      },
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    MainStack: {
      screen: CardNavigator,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    TakeModel: {
      screen: TaskStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: '#333',
      },
    },
  },
);

export default AppNavigator;
