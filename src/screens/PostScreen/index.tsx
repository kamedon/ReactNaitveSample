import React from 'react';
import {Text, View} from 'react-native';

export default class PostScreen extends React.Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Post Screen</Text>
      </View>
    );
  }
}
