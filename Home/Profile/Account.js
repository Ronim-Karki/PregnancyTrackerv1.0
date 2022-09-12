import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  SectionList,
} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const AccountDetails = [
  {
    id: 1,
    title: 'First name',
    image: 'pencil',
  },
  {
    id: 2,
    title: 'Last name',
    image: 'pencil',
  },
  {
    id: 3,
    title: 'Age',
    image: 'numeric-8-box',
  },
  {
    id: 4,
    title: 'You are the',
    image: 'nature-people',
  },
];
const Item = ({ title, image, options }) => (
  <View style={styles.container}>
    <View style={{ marginRight: 15 }}>
      <MaterialCommunityIcons name={image} size={24} color="black" />
    </View>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Account = ({}) => {
  return (
    <View>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 15 }}>
          Account
        </Text>
        <SafeAreaView
          style={{ borderBottomColor: 'grey', borderBottomWidth: 1 }}
        >
          {AccountDetails.map((item, index) => {
            return (
              <View key={index}>
                <Item
                  title={item.title}
                  image={item.image}
                  options={item.options}
                />
              </View>
            );
          })}
          <View></View>
        </SafeAreaView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
});
export default Account;
