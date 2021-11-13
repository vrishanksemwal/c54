import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {
  displayAlert(){
alert("i am an alert")
  }
  render(){
    return(
      <Button color="red" title="Click Me"/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <Button title="click me" color="pink" onPress={this.displayAlert}/>
        <RedButton />
        <Text>My First React Component</Text>
      </View>
    );
  }
}