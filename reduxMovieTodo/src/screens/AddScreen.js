import {
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Heading, Container} from 'native-base';
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddScreen = ({navigation}) => {
  const [name, setname] = useState('');
  const [noOfSeason, setnoOfSeason] = useState('');

  const storeData = async () => {
    try {
      const seasonInfo = {
        uid : 
        name,
        noOfSeason,
      };
      const storedData = await AsyncStorage.getItem('@storedData');
      const prevData = JSON.parse(storedData);
      if (!prevData) {
        console.log('If Line 1');
        const newData = {seasonInfo};
        await AsyncStorage.setItem('@storedData', JSON.stringfy(newData));
        console.log('Success');
      } else {
        console.log('Else Line 1');
        await AsyncStorage.setItem('@storedData', JSON.stringify(prevData));
        console.log('In Else', prevData);
      }
    } catch (e) {
      console.log('SomeThing Went Wrong In Try');
    }
  };
  return (
    <Container style={{flex: 1}}>
      <Heading size="xl" style={styles.heading}>
        Add Movie
      </Heading>
      <TextInput
        onChangeText={name => {
          setname(name);
        }}
        value={name}
        placeholder="Series Name"
        style={styles.txtBox}
      />
      <TextInput
        onChangeText={noOfSeason => {
          setnoOfSeason(noOfSeason);
        }}
        value={noOfSeason}
        placeholder="Total No Of Season"
        style={styles.txtBox}
      />
      <TouchableOpacity style={styles.btn} onPress={storeData}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  heading: {
    marginLeft: 140,
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  txtBox: {
    textAlign: 'center',
    marginTop: 10,
    left: 30,
    width: '110%',
    borderWidth: 2,
    borderColor: '#00b7c2',
    borderRadius: 20,
  },
  btn: {
    backgroundColor: '#00b7c2',
    width: '100%',
    height: 40,
    marginTop: 20,
    left: 45,
    borderRadius: 20,
  },
  submit: {
    top: 10,
    textAlign: 'center',
  },
});
