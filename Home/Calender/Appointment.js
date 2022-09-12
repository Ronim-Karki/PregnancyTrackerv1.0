import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useGlobalContext } from '../../context/context';

const Appoinment = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  if (isOpen == true) {
    const onDateChange = (date) => {
      setSelectedStartDate(date);
    };

    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker onDateChange={onDateChange} />

        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
      </View>
    );
  } else {
    <Text>NoThing to display</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
export default Appoinment;
