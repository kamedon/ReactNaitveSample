import React from 'react';
import {Text, View} from 'react-native';

export default class TakeScreen extends React.Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello Take</Text>
      </View>
    );
  }
}
