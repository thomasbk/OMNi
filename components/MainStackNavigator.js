import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './HomeContacts'
import Confirmation from './Confirmation'
import Picture from './Picture'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: "rgba(25,83,159,1)"
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffffff',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Envío de dinero' }}
        />
        <Stack.Screen
          name='Confirmation'
          component={Confirmation}
          options={({ route }) => ({
            title: 'Envío de dinero'
          })}
        />
        <Stack.Screen
          name='Picture'
          component={Picture}
          options={{ title: 'Foto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator