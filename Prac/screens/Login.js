import React, {useState} from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  const [name, setname] = useState('');
  const [passwd, setpasswd] = useState('');
  return (
    <View>
      <TextInput
        onChangeText={setname}
        value={name}
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={setpasswd}
        value={passwd}
      />
      {/* <Button title="Press me" color="#f194ff" /> */}
      <Pressable
        style={{
          margin: 5,
          height: 30,
          alignSelf: 'center',
          borderRadius: 10,
          width: '95%',
          height: '15%',
          backgroundColor: 'red',
          borderColor: 'white',
        }}
        onPress={() => {
          navigation.navigate('HomeScreen', {
            name,
            passwd,
          });
        }}>
        <Text
          style={{
            fontSize: 20,
            padding: 2,
            marginTop: 7,
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          LogIn
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'red',
    margin: 10,
  },
});
