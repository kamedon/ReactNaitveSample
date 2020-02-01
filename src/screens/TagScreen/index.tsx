import React from 'react';
import {Text, View} from 'react-native';

export default class TagScreen extends React.Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Tag Search</Text>
      </View>
    );
  }
}
