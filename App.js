/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const TestView = () => {
  return (
    <View>
      <Text>Dummy view</Text>
      <Icon name="google" size={20} />
    </View>
  );
};

const StackConfig = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen
        name="Home"
        component={TestView}
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
