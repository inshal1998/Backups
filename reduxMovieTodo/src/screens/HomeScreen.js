import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, Text, Box, Container} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen = ({navigation, route}) => {
  const [listOfSeasons, setListOfSeasons] = useState([]);

  const getSeason = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@total_seasons');
      const actualData = JSON.parse(jsonValue);
      console.log(actuaData, 'ActualData');
      console.log('Storage Data : ', actualData, 'HAi');
      setListOfSeasons(actualData);
      console.log('State', listOfSeasons);
    } catch (e) {
      console.log('Something went Wrong Home Screen');
      // error reading value
    }
  };

  useEffect(() => {
    getSeason();
  }, [useIsFocused]);

  return (
    <Container>
      <FlatList
        data={listOfSeasons}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
