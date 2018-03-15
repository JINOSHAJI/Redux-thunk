import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class CounterState extends React.Component {
    state={count: 0};

    handlePressCounter= ()=>{
        this.setState({count : this.state.count+1});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Counter : React-native redux</Text>
        <Text style={styles.welcome}>Count : {this.state.count}</Text>
        <Button title="Counter" color="#841584"  onPress={this.handlePressCounter} accessibilityLabel="Learn more about this purple button" />

      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },


    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});