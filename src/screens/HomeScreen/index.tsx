import React from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {homeApi} from '../../actions/HomeActions';

class HomeScreen extends React.Component {
  getHome() {
    if (!this.props.response) {
      return '';
    }
    return this.props.response.message;
  }
  isLoading() {
    return this.props.isLoading ? 'loading' : 'no';
  }

  load = () => {
    this.props.homeApi();
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
    console.log(this.props);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
        <Button title="load" onPress={this.load} />
        <Text>{this.getHome()}</Text>
        <Text>{this.isLoading()}</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  response: state.home.response,
});
const mapDispatchToProps = () => ({
  homeApi,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
