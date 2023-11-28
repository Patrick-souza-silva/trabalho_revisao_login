import React from 'react';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Routes /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
}
);