import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Characters from './screens/Characters';
import Episodes from './screens/Episodes';
import Locations from './screens/Locations';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Rick and Morty',
            headerStyle: {
              backgroundColor: 'rgb(55, 65, 81)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='Characters'
          component={Characters}
          options={{
            title: 'Rick and Morty Characters',
            headerStyle: {
              backgroundColor: 'rgb(55, 65, 81)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='Episodes'
          component={Episodes}
          options={{
            title: 'Rick and Morty Episodes',
            headerStyle: {
              backgroundColor: 'rgb(55, 65, 81)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='Locations'
          component={Locations}
          options={{
            title: 'Rick and Morty Locations',
            headerStyle: {
              backgroundColor: 'rgb(55, 65, 81)',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
