import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  SectionList,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Account from './Account';
import { auth } from '../../firebase/config';

// import sex from "./data.js"
const Data = [
  {
    id: 1,
    title: "Baby's sex",
    image: 'gender-male-female-variant',
    options: [
      { label: 'Boy', value: 'Boy' },
      {
        label: 'Girl',
        value: 'Girl',
        selected: true,
      },
      { label: 'Twins', value: 'Twins' },
      { label: 'Unknown', value: 'Unknown' },
    ],
    // sex:{1:'Boy',2:'Girl',3:'Twins',4:'Unknown'}
  },
  {
    id: 2,
    title: "Baby's name",
    image: 'baby',
    options: '',
  },
  {
    id: 3,
    title: 'Due date',
    image: 'update',
    options: '',
  },
  {
    id: 4,
    title: 'Due date calculator',
    image: 'calculator',
    options: '',
  },
  {
    id: 5,
    title: 'FirstChild',
    image: 'human-male-female-child',
    options: '',
    // option:{1:'yes', 2:'No'}
  },
];

const Pregnancy = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [data, setData] = useState([{}]);
  const sex = [
    { label: 'Boy', value: 'Boy' },
    {
      label: 'Girl',
      value: 'Girl',
      selected: true,
    },
    { label: 'Twins', value: 'Twins' },
    { label: 'Unknown', value: 'Unknown' },
  ];
  const renderItem = ({ item }) => {
    return (
      <Item title={item.title} image={item.image} options={item.options} />
    );
  };
  const dataFetch = async () => {
    try {
      const response = await fetch(
        'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/users.json'
      );
      const resData = await response.json();

      const result = Object.values(resData);
      console.log(result);
      if (result) {
        setData(result);
      } else {
        new Error('The result is empty cant trigger rerender');
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);
  const Item = ({ title, image, options }) => (
    <View style={styles.container}>
      <View style={{ marginRight: 15 }}>
        <MaterialCommunityIcons name={image} size={24} color="black" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flex: 1 }}></View>
    </View>
  );
  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 15 }}>
        Your Pregnancy
      </Text>
      <SafeAreaView
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginBottom: 15,
        }}
      >
        {Data.map((item, index) => {
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

        <View>
          {/* {data.filter((item, index) => {
            if (item.email === auth.currentUser.email) {
              return (
                <View key={index}>
                  <Text style={styles.title}>Boy</Text>
                  <Text>{item.name}</Text>
                  <Text>{item.dueDate}</Text>
                </View>
              );
            }
          })} */}
        </View>
      </SafeAreaView>

      <Account Item={Item} />
      <View>
        <Button color={'#92AADA'} title="Sign Out" />
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
export default Pregnancy;
