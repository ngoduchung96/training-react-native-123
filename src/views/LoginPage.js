import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import messagesCollection from '../services/API/messagesCollection';
import auth from '@react-native-firebase/auth';

const LoginPage = (params) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    messagesCollection.getAllDataFromMessagesCollection();
  }, []);
  const onAnonymousLogin = () => {
    auth()
      .signInAnonymously()
      .then(() => console.log('login success'))
      .catch((error) => {
        console.log('login fail ', error);
      });
    setIsAuthenticated(true);
  };
  return (
    <View style={styles.wrapper}>
      <Text>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'enter Name'}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder={'enter Password'}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Button onPress={() => onAnonymousLogin()} title={'Login'} />
      {isAuthenticated && (
        <Text style={styles.identificationMark}>Wellcome</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'yellow',
    flex: 1,
    fontSize: 15,
  },
  textInput: {
    backgroundColor: 'white',
  },
  identificationMark: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default LoginPage;
