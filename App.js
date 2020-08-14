/**
 * Vation Test React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/screens/welcome';
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';

const Stack = createStackNavigator();

const StackConfig = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerTitle: null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: null}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: null}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackConfig />
    </NavigationContainer>
  );
};

export default App;
