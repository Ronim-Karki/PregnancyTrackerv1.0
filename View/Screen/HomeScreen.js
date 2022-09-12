import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Weeks from '../../Home/Weeks';
import Schedule from '../../Home/Schedule';
import ImageBar from '../../Home/ImageBar';
function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.textMain}>Today</Text>
        </View>
        <ImageBar navigation={navigation} />
        <Weeks />
        <Schedule />
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    color: 'black',
    // backgroundColor:'blue',
    margin: 10,
    maxWidth: '100%',

    paddingTop: 15,
    fontWeight: 'bold',
  },
  textMain: {
    fontWeight: 'bold',
    fontSize: 30,
    // alignSelf:'flex-start',
    //  justifyContent:'flex-start'
  },
});

export default HomeScreen;
