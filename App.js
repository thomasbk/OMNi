import React from 'react'

import MainStackNavigator from './components/MainStackNavigator'

export default function App() {
  return <MainStackNavigator />
}



/*

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home'
import Confirmation from './components/Confirmation'
import Picture from './components/Picture'


function HomeScreen() {
  return <Home/>;
}

function ConfirmationScreen() {
  return <Confirmation/>;
}

const Stack = createStackNavigator();
/*
const RootStack = createStackNavigator( {
  Home: Home,
  Confirmation: Confirmation,
  Picture: Picture,
})
*/
/*
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/