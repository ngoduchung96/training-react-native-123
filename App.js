import React from 'react';
import LoginPage from './src/views/LoginPage';
import RegisterPage from './src/views/RegisterPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import reducers from './src/store/reducers';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/store/saga';
import HomePage from './src/views/HomePage';

const Stack = createStackNavigator();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="login">
            <Stack.Screen name="homePage" component={HomePage} />
          <Stack.Screen name="login" component={LoginPage} />
          <Stack.Screen name="register" component={RegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
