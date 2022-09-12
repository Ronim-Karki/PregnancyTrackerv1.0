import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Bar from './Bar';

const Weeks = () => {
  return (
    <View style={{ ...styles.container, ...styles.elevation }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
        8 Weeks pregnant
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <Text style={{ color: '#7E8383', flex: 1 }}>1st Trimester</Text>
        <Text style={{ color: '#7E8383' }}>Due 5 Apr</Text>
      </View>
      <Bar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: 110,
    backgroundColor: 'white',
    borderRadius: 15,
    top: -60,
    padding: 10,
    overflow:'hidden'
    // borderColor: 'black',

    // borderStyle: 'solid',
    // borderWidth: 1,

    // borderWidth: 25,
  },
  elevation: {
    elevation: 2,
    shadowColor: 'black',
  },
});
export default Weeks;
