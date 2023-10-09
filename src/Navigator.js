import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './component/Login';
import Logout from './component/Logout';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Logout"
          component={Logout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
