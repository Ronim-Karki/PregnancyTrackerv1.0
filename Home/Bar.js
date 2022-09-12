import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
export default class Bar extends Component {
  render() {
    return (
      <View style={progressStyles.containerStyle}>
        <Progress.Bar progress={0.3} width={375} color="#92AADA" />
      </View>
    );
  }
}
const progressStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
