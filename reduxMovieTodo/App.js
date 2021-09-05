import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddScreen from './src/screens/AddScreen';
import HomeScreen from './src/screens/HomeScreen';
import {NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{title: 'Home Screen'}}
          />
          <Stack.Screen
            name="AddScreen"
            options={{title: 'Add Movie'}}
            component={AddScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    // {/* </Provider> */}
  );
};

export default App;

const styles = StyleSheet.create({});
