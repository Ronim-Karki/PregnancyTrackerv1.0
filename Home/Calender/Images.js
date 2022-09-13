import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Slideshow from 'react-native-image-slider-show';
const Images = () => {
  const [data, setData] = useState([{}]);
  const [image, setImage] = useState([{}]);

  const dataFetch = async () => {
    try {
      const response = await fetch(
        'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/pregnancy.json'
      );
      const resData = await response.json();

      const result = Object.values(resData);
      console.log(result);
      if (result) {
        setData(result);
        {
          result.map((item, index) => {
            setImage([{ url: item.scanImage }]);
          });
        }
      } else {
        new Error('The result is empty cant trigger rerender');
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(data);
  useEffect(() => {
    dataFetch();
  }, []);
  console.log(image);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Images</Text>
      <View style={{ height: 500 }}>
        <Slideshow height={500} dataSource={image} />
      </View>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    // margin: 15,
    marginTop: 16,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },
});
