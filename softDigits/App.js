import React from 'react';
import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView
      style={{width: '100%'}}
      source={{
        uri: 'http://www.softdigit.in/',
      }}
    />
  );
};

export default App;

const styles = StyleSheet.create({});
