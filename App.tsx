import React from 'react';
import 'react-native-gesture-handler';

import AppNavigator from './src/navigation/AppNavigator';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import {homeReducer} from './src/actions/HomeActions';
const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  home: homeReducer,
  nav: navReducer,
});

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const App = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware, middleware),
);

export class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
