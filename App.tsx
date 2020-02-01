import React from 'react';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/navigation/AppNavigator';

const MainTabNavigation = createAppContainer(AppNavigator);

const App = () => {
  return <MainTabNavigation />;
};

export default App;
