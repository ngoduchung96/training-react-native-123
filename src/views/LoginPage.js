import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button, Keyboard} from 'react-native';
import {StyleSheet} from 'react-native';
import messagesCollection from '../services/API/messagesCollection';
import auth from '@react-native-firebase/auth';
import api from '../store/api/authentication';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nameFocus, setNameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  useEffect(() => {
    messagesCollection.getAllDataFromMessagesCollection();
    auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user loged in', user)
        navigation.push('homePage');
      } else {
        console.log('There is no user here')
      }
    });
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.styledTitle}>LOGIN</Text>
      <Text style={styles.styledText}>Email</Text>
      <TextInput
        style={
          !nameFocus
            ? styles.textInput
            : {...styles.textInput, borderBottomColor: 'blue'}
        }
        placeholder={'enter Email'}
        onFocus={() => {
          setNameFocus(true);
        }}
        onBlur={() => {
          setNameFocus(false);
        }}
        keyboardType={'email-address'}
        onSubmitEditing={Keyboard.dismiss}
        autoCapitalize={'none'}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <Text style={styles.styledText}>Password</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder={'enter password'}
        autoCapitalize={'none'}
        onSubmitEditing={Keyboard.dismiss}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
       <Text style={styles.styledRouterText} onPress={()=>{
        navigation.push('login');
      }}>Have not had a account yet?</Text>
      <View style={styles.styledButton}>
        <Button
          onPress={async () => {
            console.log('input login :', email, password)
            const callApi = await api.loginUserApi({
              email: email,
              password: password,
            });
            if (callApi) {
              navigation.push('homePage');
            }
          }}
          title={'Sign in'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    fontSize: 15,
  },
  styledRouterText:{
    color:'blue',
    textAlign:'right',
    marginRight:10
  },
  styledTitle:{
    fontSize:30,
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:60
  },
  styledText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'black',
  },
  textInput: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 0,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
    color: 'black',
  },
  styledButton: {
    marginTop: 50,
  },
  identificationMark: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default LoginPage;
