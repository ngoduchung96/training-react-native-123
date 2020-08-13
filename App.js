import React from 'react';
import LoginPage from './src/views/LoginPage';
import RegisterPage from './src/views/RegisterPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login">
        <Stack.Screen
          name="login"
          component={LoginPage}
        />
        <Stack.Screen
          name="register"
          component={RegisterPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
