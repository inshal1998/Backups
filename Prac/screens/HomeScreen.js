import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation, route}) => {
  const {name, passwd} = route.params;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{passwd}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
